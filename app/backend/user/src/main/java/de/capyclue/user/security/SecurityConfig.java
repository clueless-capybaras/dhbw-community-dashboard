package de.capyclue.user.security;

import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final Environment environment;

    public SecurityConfig(Environment environment) {
        this.environment = environment;
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/api/user/user").authenticated()
                .anyRequest().permitAll()
                .and()
            .oauth2ResourceServer()
                .jwt().decoder(jwtDecoder());
    }

    @Bean
    JwtDecoder jwtDecoder() {
        String issuerUri = environment.getProperty("spring.security.oauth2.resourceserver.jwt.issuer-uri");
        assert issuerUri != null;
        return JwtDecoders.fromIssuerLocation(issuerUri);
    }

}
