package C3Reto3.Reto3v2.interfac;

import C3Reto3.Reto3v2.modelo.Game;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Fernando Forero
 */
public interface InterfaceGames extends CrudRepository<Game,Integer> {
    
}
