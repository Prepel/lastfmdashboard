class AbstractPresenter {

    constructor(model, template){
        this.template = template;
        this.model = model;
    }

    render(...templateVars) {
        //todo: render template
    }
}

export {AbstractPresenter as default};