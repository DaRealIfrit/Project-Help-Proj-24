class Paper {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            desnity: 1.2
        }

        this.body = Bodies.circle(x, y, r/2, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var paper_position = this.body.position;
        push()
        translate(paper_position.x, paper_position.y)
        rectMODE(CENTER)
        strokeWheight(3);
        fill(255, 0, 255)
        ellipse(0, 0, this.r,this.r);
        pop()
    }
}