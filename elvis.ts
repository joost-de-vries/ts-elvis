import './safe';

interface C{
    name?:string
}
interface B{
    c?:C
}interface A{
    b?: B
}


const a =<A>{
    b:<B>{
        c:<C>{
            name:"pipo"
        }
    }
}

const b = a.b

const x = a.getProp2("b","c")

const y = a.getProp3("b","c","name")

