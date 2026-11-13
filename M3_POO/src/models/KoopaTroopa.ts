import { Inimigo } from "./Inimigo";

export class KoopaTroopa extends Inimigo {
  
  constructor() {
    super("Koopa Troopa", 200);
  }

  atacar(): void {
    console.log("🐢 Koopa se esconde na concha e desliza!");
  }
}