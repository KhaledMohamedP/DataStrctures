function LinkedList(){
  this.size = 0; 
  this.head = new Node('',null); 

  function Node(val, next){
    this.value = val; 
    this.next = next; 
  }
  
  this.add = function(val){
    var node = this.head; 
    while(node.next !== null){
      node = node.next; 
    }
    node.next = new Node(val,null); 
    this.size++; 
  };
  
  this.loop = function(){
   var node = this.head; 
    while(node.next !== null){
      node = node.next; 
      console.log(node.value); 
    }
  };
  
  this.remove = function(val){
   var node = this.head; 
    while(node.next !== null){
      last = node; 
      node = node.next; 
      if(node.value === val){
        last.next = node.next; 
        this.size--; 
        return node; 
      }
    }
    
    return 'element not found';
  };
  
}


var list = new LinkedList(); 


list.add('khaled'); 

list.add('saleh'); 

list.add('mohamed'); 
list.add('ali'); 

list.remove('mohsamed');
