class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); // Rounds to 4 decimal places
    }
}

// Example usage
const cylinder = new Cylinder(5, 10);
console.log("Volume of the Cylinder:", cylinder.getVolume());
