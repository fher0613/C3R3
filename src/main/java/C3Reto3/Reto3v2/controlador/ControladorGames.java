
package C3Reto3.Reto3v2.controlador;

import C3Reto3.Reto3v2.modelo.Game;
import C3Reto3.Reto3v2.servicios.ServiciosGames;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Game")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})

public class ControladorGames {
    @Autowired
    private ServiciosGames servicio;
    @GetMapping("/all")
    public List<Game> getGames(){
        return servicio.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Game> getGames(@PathVariable("id") int gamesId) {
        return servicio.getGames(gamesId);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Game save(@RequestBody Game games) {
        return servicio.save(games);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Game update(@RequestBody Game games) {
        return servicio.update(games);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int gamesId) {
        return servicio.deleteGames(gamesId);
    }
    
    
}
