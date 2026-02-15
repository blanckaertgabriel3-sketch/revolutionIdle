export default class Model {
	constructor() {
		// Player money
		this.availableFunds = 40;

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
		this.costUpgradeSpeedA = 50;
		this.costUpgradeSpeedB = 50;
		this.costUpgradeSpeedC = 50;
		this.costUpgradeSpeedD = 50;
		this.costUpgradeSpeedE = 50;
		this.costUpgradeSpeedF = 50;
		this.costUpgradeSpeedG = 50;
		this.costUpgradeSpeedH = 50;
		this.costUpgradeSpeedI = 50;
		this.costUpgradeSpeedJ = 50;

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
		this.lightColor = [
			"#7A2E2F","#875A2D","#83822C","#58812C","#2C8559","#2D8687","#26256C","#562C82","#842C84","#878687"
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
		//can Pay
		if(moneyReference >= wantToBuy) {
			return true;
		}
		//can't Pay
		else {
			return false;
		}
	}
	canAffordUpgrade(letter) {
		if (this.canPay(this.availableFunds, this["costUpgradeSpeed" + letter])) {
			return true;
		}
		else {
			return false;
		}

	}
}