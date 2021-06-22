try {
    //code 
    throw new Error('Something went wrong')
    console.log("I'm on try block")
} catch (ex) {
    console.log('Im on exception block', ex.message)
    //logic
}finally{
    
}