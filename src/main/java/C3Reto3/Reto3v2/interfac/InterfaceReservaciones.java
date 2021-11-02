
package C3Reto3.Reto3v2.interfac;

import C3Reto3.Reto3v2.modelo.Reservaciones;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Fernando Forero
 */
public interface InterfaceReservaciones extends CrudRepository<Reservaciones,Integer>{
    
    public List<Reservaciones> findAllByStatus (String status); 
    public List<Reservaciones> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);
    // SELECT clientid, COUNT(*) AS total FROM reservacion group by clientid order by desc;
    @Query ("SELECT c.client, COUNT(c.client) from Reservaciones AS c group by c.client order by COUNT(c.client)DESC")
    public List<Object[]> countTotalReservationsByClient();
    
}
