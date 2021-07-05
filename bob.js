class bob{
    constructor(x,y,r)
    {
        var bob_options = {
            restitution: 0.4,
            friction: 0,
            isStatic: false,
            density: 0.8
            
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(x, y, r, bob_options);
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
    
        push();
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r)
        fill(rgb(6, 253, 199))
        pop();
      }
}