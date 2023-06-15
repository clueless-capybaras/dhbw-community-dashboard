# CI/CD setup summary

Abbreviations | Explanation
------------- | ------------
CI | Continuous Integration
CD | Continuous Delivery
e2e | End-to-end

## Scope
This document describes the setup of our CI/CD pipeline and its specifications.

## Requirements
We want to setup a CI/CD pipeline for our project. The pipeline should be able to build, test and deploy our project. 
The pipeline should be triggered by any push to any branch. 

Since we agreed on implementing new functionalities on feature branches, so there won't be any bugs in our production environment, it's important to run tests before merging into main. Therefore a push on a feature branch should trigger all our tests. When a push is made to the main branch, the pipeline should also deploy the project to the production environment. After the deployment we also use Lighthouse to test the performance of our application.

## Tools
We decided to use the following tools for our CI/CD pipeline:
* [GitHub Actions](https://docs.github.com/en/actions)
* [Docker](https://www.docker.com/)
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Setup
### GitHub Actions
As we are already using a GitHub-Actions pipeline on a self-hosted runner to deploy a development version of our project to a server, it was logical to also use these tools to automate our tests. Since we are not dependent on any special requirements of the running virtual machine (such as access to a private network or consistency in between runs) we are using the runners provided by GitHub itself. This also lets us run all four testing jobs in parallel. These are JUnit tests for our microservice backends Canteen, Calendar and User. For our react frontend we want to run Cypress based e2e tests. 

You can have a look at our [Test-Plan](../docs/test_plan/test_plan.md) for more information on our testing strategy.

In both of these scenarios it is not simply enough to run

>mvn test --file path/to/pom.xml

or

>npx cypress run --spec "path/to/spec.cy.js"

respectively as our java spring-boot backends are depending on a reachable database to succeed in running and testing. 

Also, for the cypress tests to run, the application has to be already running as the tests do not start up the application by themselves. To accommodate this, we have included preparation steps in the jobs to spin up the necessary parts of the application, usually using docker-compose to start specific services.

You can have a more detailed look at our pipeline setup for testing [here](../.github/workflows/tests.yml) and for our deployment [here](../.github/workflows/deploy-to-dev.yml).

Besides that we also log every test run automated into a [failed tests file](../../docs/test_evaluation_summary/failed_tests.md). This workflow is specified in our [tests.yml](../.github/workflows/tests.yml). 
Have a direct look at the part which is responsible for logging test results:
```
Log-Failed-Tests:
    runs-on: ubuntu-latest
    needs: [Cypress-Frontend, JUnit-Calendar, JUnit-Canteen, JUnit-User]
    if: ${{ always() && contains(needs.*.result, 'failure') && github.ref != 'refs/heads/main' }}
    steps:
      - uses: actions/checkout@v3
      - name: Append failed tests to MD file
        run: |
          echo "| $(date +'%Y-%m-%dT%H:%M:%S') | ${{ github.ref_name }} 
                | [${{ github.run_id }}]
                (https://github.com/clueless-capybaras/dhbw-community-dashboard/actions/runs/${{ github.run_id }}) 
                | - | - |" >> docs/test_evaluation_summary/failed_tests.md
      - name: Commit MD
        uses: EndBug/add-and-commit@v9
        with: 
          add: docs/test_evaluation_summary/failed_tests.md
          default_author: github_actions
          message: 'Automated logging of failed tests'
```

---

### Docker
We are using docker to deploy our software and run our tests in a controlled environment. This is especially important for our e2e tests, as they are running in a headless browser. This means that the tests are running on a virtual machine without a graphical user interface. 

---

### Google Lighthouse
To test the performance of our application we are using Google Lighthouse. This tool is integrated in our CI/CD pipeline and runs after every deployment to our production environment. Here we can have a look at some quality metrics like speed index, total blocking time and first/largest contentful paint. To check the exact results from Lighthouse, a .zip file is created and uploaded to the artifacts of the pipeline.