class ScriptParser
{
    public RenderScripts(content: string, location:string)
    {
        const postBlock = document.getElementById(location);
        if(postBlock)
        {
            const html = content;
            const parser = new DOMParser();
            const wrapper = parser.parseFromString(html, "text/html");
            const headItems = wrapper.head.children;
            const bodyItems = wrapper.body.children;
            this.setAttributesOfElement(headItems, postBlock);
            this.setAttributesOfElement(bodyItems, postBlock);
        }
    }

    public setAttributesOfElement(items:any, htmlElement:HTMLElement)
    {
        for(let i = 0; i < items.length; i++)
        {
            const createEl = document.createElement(items[i].localName);

            const elAttributes = items[i].attributes;
            if(elAttributes.length > 0)
            {
                for(let j = 0; j < elAttributes.length; j++)
                {
                    createEl.setAttribute(elAttributes[j].name, elAttributes[j].value); 
                }
            } 
            createEl.innerHTML = items[i].innerHTML
           
            htmlElement.appendChild(createEl);
        }
    }
}
export default new ScriptParser