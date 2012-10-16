package controllers;

import java.util.ArrayList;
import java.util.Date;

import models.Arbeid;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.node.ObjectNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

public class TimeReg extends Controller {

	/*
	 * Returner en liste med all loggført arbeid.
	 * 
	 * GET: /timereg
	 */
	public static Result index() {
		//Arbeid a = new Arbeid(199, new Date(), "Konsulent", 7.5, true, "ingen kommentar");
		//a.save();
		
		if (request().accepts("text/html")) {
			return ok(views.html.timereg.index.render());
		} else {
			return ok(Json.toJson(Arbeid.find.all()));	
		}
	}

	
	/*
	 * Vis arbeid
	 * 
	 * GET: /timereg/:id
	 */
	public static Result show(Long id) {

		Arbeid arbeid = Arbeid.find.byId(id);

		return ok(Json.toJson(arbeid));
	}

	/*
	 * Endre registrert arbeid
	 * 
	 * GET: /timereg/:id/edit
	 */
	public static Result edit(Long id) {

		Arbeid arbeid = Arbeid.find.byId(id);

		return ok(Json.toJson(arbeid));
	}

	/*
	 * Oppretter et nytt arbeid
	 * 
	 * POST: /timereg
	 */
	@BodyParser.Of(BodyParser.Json.class)
	public static Result create() {

		JsonNode node = request().body().asJson();

		if (node == null) {
			ObjectNode result = Json.newObject();
			result.put("status", "Kunne ikke opprette arbeid.");
			result.put("melding",
					"Klarte ikke å parse innholdet i requestbody.");

			return badRequest(result);
		}

		Arbeid arbeid = Json.fromJson(node, Arbeid.class);
		arbeid.save();

		return ok(Json.toJson(arbeid));
	}

	/*
	 * Oppdaterer et registrert arbeid
	 * 
	 * PUT: /timereg/:id
	 */
	@BodyParser.Of(BodyParser.Json.class)
	public static Result update(Long id) {

		JsonNode node = request().body().asJson();

		if (node == null) {
			ObjectNode result = Json.newObject();
			result.put("status", "Kunne ikke endre arbeid.");
			result.put("melding",
					"Klarte ikke å parse innholdet i requestbody.");

			return badRequest(result);
		}

		Arbeid arbeid = Arbeid.find.byId(id);

		Arbeid oppdatertArbeid = Json.fromJson(node, Arbeid.class);
		arbeid.oppdater(oppdatertArbeid);
		arbeid.save();

		return ok(Json.toJson(arbeid));
	}

	/*
	 * Slett arbeid
	 * 
	 * DELETE: /timereg/:id
	 */
	@BodyParser.Of(BodyParser.Json.class)
	public static Result delete(Long id) {

		Arbeid arbeid = Arbeid.find.byId(id);

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
			arbeid.delete();

			result.put("status", "OK");
			result.put("message", "Arbeid ble slettet");
			return ok(result);
		}
	}
}