class AbstractPresenter {

    /**
     * @param {*} model
     * @param {string} template
     */
    constructor(model, template) {
        this.template = template;
        this.model = model;
    }

    render(...templateVars) {
        //todo: render template
        return this.template;
    }

}

export {AbstractPresenter as default};
