package controllers;

import java.util.List;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.node.ObjectNode;

import models.Arbeid;
import play.data.DynamicForm;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http.RequestBody;
import play.mvc.Result;

public class TimeReg extends Controller {

	public static Result index() {
		return ok(views.html.timereg.index.render(Arbeid.find.all()));
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result nyttArbeid() {
		// Ta imot data
		//DynamicForm dynamicForm = form().bindFromRequest();
		//String input = dynamicForm.get("input_navn");
		
		String input = "HEi";
		
		// Send respons
		ObjectNode result = Json.newObject();
		if (input == null) {
			result.put("status", "KO");
			result.put("message", "Missing parameter [input]");
			return badRequest(result);
		} else {
			result.put("status", "OK");
			result.put("message", "Hello " + input);
			return ok(result);
		}
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result endreArbeid(Long id) {
		// Ta imot data
		//DynamicForm dynamicForm = form().bindFromRequest();
		//String input = dynamicForm.get("input_navn");
		
		// Endre arbeid...
		Arbeid arbeid = Arbeid.find.byId(id);
		
		// legg til nye data fra form
		
		// Send respons
		ObjectNode result = Json.newObject();
		if (id == null) {
			result.put("status", "KO");
			result.put("message", "Missing parameter [id]");
			return badRequest(result);
		} else {
			result.put("status", "OK");
			result.put("message", "Hello " + id);
			return ok(result);
		}
	}

	@BodyParser.Of(BodyParser.Json.class)
	public static Result slettArbeid(Long id) {
		Arbeid arbeid = Arbeid.find.byId(id);
		
		// Send respons
		ObjectNode result = Json.newObject();
		if (id == null) {
			result.put("status", "KO");
			result.put("message", "Missing parameter [id]");
			return badRequest(result);
		} else if (arbeid == null) {
			result.put("status", "KO");
			result.put("message", "Missing parameter [id]");
			return badRequest(result);
		} else {
			// Slett arbeid...
			arbeid.delete();
			
			result.put("status", "OK");
			result.put("message", "Hello " + id);
			return ok(result);
		}
	}
	
	
}