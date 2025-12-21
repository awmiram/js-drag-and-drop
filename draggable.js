//making the virtual dom /plugin

//element => list div
//list => data array
//items => array contents
class draggable {
    dragSrcel;
    list;
    update;
    constructor(items){
        this.setupList(items);
        this.list = items.list;
        if(items.update){
            this.update = items.update;
        }
        for(let listitem of items.el.children){ //making the children of the list draggable
            this.addDnDhandlers(listitem);
        }
    }

    setupList(items){
    let {list,el:element,template}=items;
    if(!element) throw Error('list dose not exist');
    if(!list)throw Error('data dose not exist');
    if(!Array.isArray(list)) throw Error('list is not an array please insert an array');
    if(!template)throw Error('please add a template function');
    if(typeof template !=="function") throw Error('please add a function as template');

    list.forEach(items=>element.innerHTML +=template(items));//iterating the list and adding the itemss to the HTML
    //innerHTML is a property in JavaScript that allows you to get or set the HTML content inside an element. 
        }
    addDnDhandlers(listitem){
        listitem.setAttribute('draggable' ,true);//making the listitem draggable
        
        listitem.addEventListener('dragstart',(event)=>this.handlestart(event));
        listitem.addEventListener('dragenter',(event)=>this.handlenter(event));
        listitem.addEventListener('dragover',(event)=>this.handleover(event));
        listitem.addEventListener('dragleave',(event)=>this.handleleave(event));
        listitem.addEventListener('drop',(event)=>this.handledrop(event));
        listitem.addEventListener('dragend',(event)=>this.handleend(event));
    }
    handlestart(event){
        this.dragSrcel=event.target;//
        event.dataTransfer.setData('text/html',event.target.outerHTML);//outerHTML is a property in JavaScript that gets or sets the HTML serialization of an element including the element itself, unlike innerHTML which only deals with the element's contents.
        event.target.classList.add('dragElem');
    }
    handlenter(event){    
        event.target.classList.add('enter');
    }
 
    handleleave(event){
            event.target.classList.remove('over');
            event.target.classList.remove('enter');
    }
    handledrop(event){
        event.target.classList.remove('over');
        event.target.classList.remove('enter');
        let Target = event.target;
        if(this.dragSrcel !=Target){
              Target.parentNode.removeChild(this.dragSrcel); //parentNOde => list div
        let dropHTML =event.dataTransfer.getData('text/html')//selected items
        Target.insertAdjacentHTML('beforebegin',dropHTML);
        this.addDnDhandlers(Target.previousSibling); 
        }
    }
    handleover(event){
        if(event.preventDefault)event.preventDefault();//??
        event.target.classList.add('over');
    }
    handleend(event){
        event.target.classList.remove('dragElem');
        let newlist=[];
        list.querySelectorAll('.list-items').forEach(elm=>newlist.push(this.list.find(items=>elm.id == items.id)));        
        this.update(newlist);
    }
} 
