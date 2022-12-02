const calc = (a, b, operator) => {
    //instead of using eval, use this:
    //it execute the operation according the operator received by parameter
    return (Function("a", "b", `return a ${operator} b`)(a,b) )
}

