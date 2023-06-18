/*
remember that the format for writing jsx code is:
1)IMPORT
2)CREATE CLASS
3)RENDERING
4)EXPORT
*/


//start off with import
import React, {Component, ReactPropTypes} from 'react';

//createing class
class TableCell extends Component{
    constructor(props){ //creating and defining cell propType 
        super(props)  //this allows the cell to be interacted with
    }

    //rendering
    render(){
        return(<span className='Cell'></span>)
        //the <span> element is used to group the Cell class type so that ot can
        //be easier to acess and tyle with css as a whole component/ tag/class for it
    }
}

//exporting
export default TableCell