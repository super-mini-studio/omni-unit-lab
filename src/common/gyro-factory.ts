export class GyroFactory {
    gyro = 0;

    public calculateGyro(rating: number): number {
        this.gyro = Math.round(rating / 100);

        if(this.gyro < 1) {
            this.gyro = 1;
        }
        
        return this.gyro;
    }

    public get getGyro() {
        return this.gyro;
    }
}