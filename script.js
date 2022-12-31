function recursion(val,pow){
  if(pow===1){
    return val;
  }else{
    return val * recursion(val,pow-1);
  }
}
console.log(recursion(2, 5))

// чесно, знайшов в неті, але розібрався як воно працює) трохи ламає мозок ця рекурсія