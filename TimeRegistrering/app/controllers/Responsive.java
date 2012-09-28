package controllers;

import models.Arbeid;
import play.mvc.Controller;
import play.mvc.Result;

public class Responsive extends Controller {

	public static Result index() {
		return ok(views.html.responsive.index.render(""));
	}

}
