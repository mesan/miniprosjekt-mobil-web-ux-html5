package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class Web  extends Controller {

	public static Result index() {
		
		return ok(views.html.web.index.render(""));
	}
}
