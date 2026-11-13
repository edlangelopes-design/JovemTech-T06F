import { Inimigo } from "./Inimigo";
export class KoopaTroopa extends Inimigo {
    constructor() {
        super("Koopa Troopa", 200);
    }
    atacar() {
        console.log("🐢 Koopa se esconde na concha e desliza!");
    }
}
//# sourceMappingURL=KoopaTroopa.js.map