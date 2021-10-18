
package C3Reto3.Reto3v2.interfac;

import C3Reto3.Reto3v2.modelo.Cliente;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author USUARIO
 */
public interface InterfaceCliente extends CrudRepository<Cliente,Integer> {
    
}
