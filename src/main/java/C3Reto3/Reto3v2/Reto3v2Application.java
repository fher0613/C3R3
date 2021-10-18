/**
 * @author Fernando Forero
Procedimiento: Los pasos son crear uno a uno:
* 1. Modelo
* 2. Interface
* 3. repositorio
* 4. Servicios
* 5. Controlador WEB
* Para cada una de las siguientes tablas:
* 1.Games
* 2.Categoria
* 3.Cliente
* 4.Mensaje
* 5.Reservaciones
**/
package C3Reto3.Reto3v2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties
@EntityScan(basePackages = {"C3Reto3.Reto3v2.modelo"})  // scan JPA entitie
@SpringBootApplication
public class Reto3v2Application {

	public static void main(String[] args) {
		SpringApplication.run(Reto3v2Application.class, args);
	}

}
