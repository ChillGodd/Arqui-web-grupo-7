package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.User;
import pe.edu.upc.awgrupo7.repositories.IUserRepository;

import java.util.ArrayList;
import java.util.List;
//Clase 2
@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Autowired
    private IUserRepository repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repo.findByNombreUser(username);

        if (user == null) {
            throw new UsernameNotFoundException(String.format("User not exists", username));
        }

        List<GrantedAuthority> roles = new ArrayList<>();

        // Como el usuario tiene un solo rol, accedemos a user.getRol().getNombre()
        roles.add(new SimpleGrantedAuthority(user.getRol().getNombre()));

        UserDetails ud = new org.springframework.security.core.userdetails.User(
                user.getNombreUser(),
                user.getContrasenia(),
                user.getEnabled(),
                true,
                true,
                true,
                roles
        );

        return ud;
    }
}

