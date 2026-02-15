export default class Model {
	constructor() {
		// Player money
		this.availableFunds = 1100;

		//multipliers
		this.multiplierA = 5.00;
		this.multiplierB = 0.00;
		this.multiplierC = 5.00;
		this.multiplierD = 0.00;
		this.multiplierE = 5.00;
		this.multiplierF = 0.00;
		this.multiplierG = 5.00;
		this.multiplierH = 0.00;
		this.multiplierI = 5.00;
		this.multiplierJ = 0.00;
		
		//Circle Upgrade
		//actual Laps Per Sec
		this.lapsSecA = 0; 
		this.lapsSecB = 0; 
		this.lapsSecC = 0; 
		this.lapsSecD = 0; 
		this.lapsSecE = 0; 
		this.lapsSecF = 741852963; 
		this.lapsSecG = 741852963; 
		this.lapsSecH = 741852963; 
		this.lapsSecI = 0; 
		this.lapsSecJ = 0; 
		//add multiplier per sec
		this.addLapsPerSecA = 0;
		this.addLapsPerSecB = 0;
		this.addLapsPerSecC = 0;
		this.addLapsPerSecD = 79879;
		this.addLapsPerSecE = 79879;
		this.addLapsPerSecF = 79879;
		this.addLapsPerSecG = 0;
		this.addLapsPerSecH = 0;
		this.addLapsPerSecI = 0;
		this.addLapsPerSecJ = 0;
		//costUpgradeSpeed
		this.costUpgradeSpeedA = 500;
		this.costUpgradeSpeedB = 0;
		this.costUpgradeSpeedC = 150;
		this.costUpgradeSpeedD = 150;
		this.costUpgradeSpeedE = 150;
		this.costUpgradeSpeedF = 150;
		this.costUpgradeSpeedG = 150;
		this.costUpgradeSpeedH = 150;
		this.costUpgradeSpeedI = 150;
		this.costUpgradeSpeedJ = 150;

		this.circleLvlA = 0;
		this.circleLvlB = 0;
		this.circleLvlC = 50505050;
		this.circleLvlD = 0;
		this.circleLvlE = 0;
		this.circleLvlF = 0;
		this.circleLvlG = 505460;
		this.circleLvlH = 505460;
		this.circleLvlI = 505460;
		this.circleLvlJ = 505460;
		this.color = [
			"#E64F4F","#FFA64D","#F8F84A","#A0F549","#4BFEA4","#4CFFFF","#3F3FD4","#9F49F4","#FB4BFB","#FFFFFF"
		];
		this.letters = [
			"A","B","C","D","E","F","G","H","I","J",
		]

		for(let i=0; i<this.letters.length; i++) {
			//initialise buttons
			this["upgradeSpeedBtn" + this.letters[i]];
		}
	}
	canPay(moneyReference, wantToBuy) {
		if(moneyReference >= wantToBuy) {
			console.log("can Pay");
			this.changeColorBtn();
		}
		else {
			console.log("can't pay");
		}
	}
	changeColorBtn() {
		console.log("colorChange");
	}
}