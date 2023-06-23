const fynl = {
	success: true,
	build: {
		name: "Fynl Fogblossom",
		class: "Druid",
		dualClass: null,
		level: 1,
		ancestry: "Halfling",
		heritage: "Wildwood Halfling",
		background: "Fyns background",
		alignment: "N",
		gender: "She/Her",
		age: "46",
		deity: "Green Faith",
		size: 1,
		sizeName: "Small",
		keyability: "wis",
		languages: ["Common", "Elven", "Halfling", "Sylvan"],
		rituals: [],
		resistances: [],
		attributes: {
			ancestryhp: 6,
			classhp: 8,
			bonushp: 0,
			bonushpPerLevel: 0,
			speed: 25,
			speedBonus: 0,
		},
		abilities: {
			str: 13,
			dex: 18,
			con: 17,
			int: 15,
			wis: 16,
			cha: 11,
			breakdown: {
				ancestryFree: [],
				ancestryBoosts: [],
				ancestryFlaws: [],
				backgroundBoosts: [],
				classBoosts: [],
				mapLevelledBoosts: { 1: ["Con", "Dex", "Int", "Str"] },
			},
		},
		proficiencies: {
			classDC: 2,
			perception: 2,
			fortitude: 2,
			reflex: 2,
			will: 4,
			heavy: 0,
			medium: 2,
			light: 2,
			unarmored: 2,
			advanced: 0,
			martial: 0,
			simple: 2,
			unarmed: 2,
			castingArcane: 0,
			castingDivine: 0,
			castingOccult: 0,
			castingPrimal: 2,
			acrobatics: 0,
			arcana: 2,
			athletics: 2,
			crafting: 2,
			deception: 0,
			diplomacy: 0,
			intimidation: 0,
			medicine: 2,
			nature: 2,
			occultism: 0,
			performance: 0,
			religion: 0,
			society: 0,
			stealth: 0,
			survival: 2,
			thievery: 0,
		},
		mods: {},
		feats: [
			["Animal Companion", null, "Awarded Feat", 1],
			["Natural Medicine", null, "Awarded Feat", 1],
			["Shield Block", null, "Awarded Feat", 1],
			["Wildwood Halfling", null, "Heritage", 1],
			["Halfling Luck", null, "Ancestry Feat", 1],
		],
		specials: [
			"Animal Order",
			"Anathema",
			"Druidic Language",
			"Wild Empathy",
			"Keen Eyes",
			"Wildwood Halfling",
		],
		lores: [
			["Guild Lore", 2],
			["Guild", 0],
		],
		equipmentContainers: {
			"1d459836-25cb-4ef8-a87e-df09f6d48a84": {
				containerName: "Backpack",
				bagOfHolding: false,
				backpack: true,
			},
		},
		equipment: [
			["Backpack", 1],
			["Bedroll", 1, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Chalk", 10, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Flint and Steel", 1, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Rope", 1, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Rations", 2, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Torch", 5, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Waterskin", 1, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Soap", 1, "1d459836-25cb-4ef8-a87e-df09f6d48a84"],
			["Oil", 1],
			["Net", 1],
			["Bullets (10 rounds)", 10],
		],
		specificProficiencies: {
			trained: [],
			expert: [],
			master: [],
			legendary: [],
		},
		weapons: [
			{
				name: "Halfling Sling Staff",
				qty: 1,
				prof: "martial",
				die: "d10",
				pot: 0,
				str: "",
				mat: null,
				display: "Halfling Sling Staff",
				runes: [],
				damageType: "B",
				attack: 4,
				damageBonus: 0,
				extraDamage: [],
			},
			{
				name: "Corset Knife",
				qty: 1,
				prof: "simple",
				die: "d4",
				pot: 0,
				str: "",
				mat: null,
				display: "Corset Knife",
				runes: [],
				damageType: "P",
				attack: 7,
				damageBonus: 1,
				extraDamage: [],
			},
		],
		money: { cp: 9, sp: 0, gp: 1, pp: 0 },
		armor: [
			{
				name: "Leaf Weave",
				qty: 1,
				prof: "light",
				pot: 0,
				res: "",
				mat: null,
				display: "Leaf Weave",
				worn: true,
				runes: [],
			},
			{
				name: "Hide Shield",
				qty: 1,
				prof: "shield",
				pot: 0,
				res: "",
				mat: null,
				display: "",
				worn: true,
				runes: [],
			},
		],
		spellCasters: [
			{
				name: "Druid",
				magicTradition: "primal",
				spellcastingType: "prepared",
				ability: "wis",
				proficiency: 2,
				focusPoints: 0,
				innate: false,
				perDay: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				spells: [
					{
						spellLevel: 0,
						list: [
							"Acid Splash",
							"Gouging Claw",
							"Tanglefoot",
							"Healing Plaster",
							"Dancing Lights",
						],
					},
					{ spellLevel: 1, list: ["Nettleskin", "Animal Allies"] },
				],
				prepared: [],
			},
		],
		focusPoints: 1,
		focus: {
			primal: {
				wis: {
					abilityBonus: 3,
					proficiency: 2,
					itemBonus: 0,
					focusCantrips: [],
					focusSpells: ["Heal Animal"],
				},
			},
		},
		formula: [],
		acTotal: {
			acProfBonus: 3,
			acAbilityBonus: 4,
			acItemBonus: 1,
			acTotal: 18,
			shieldBonus: "2",
		},
		pets: [
			{
				type: "Animal Companion",
				name: "Young Badger",
				equipment: [],
				animal: "Badger",
				mature: false,
				incredible: false,
				incredibleType: "Nimble",
				specializations: [],
				armor: "Unarmored",
			},
		],
		familiars: [],
	},
};

const bombGoblin = {
	success: true,
	build: {
		name: "Bomb",
		class: "Alchemist",
		dualClass: null,
		level: 1,
		ancestry: "Goblin",
		heritage: "Tailed Goblin",
		background: "Magical Experiment (Resistant Skin)",
		alignment: "N",
		gender: "Not set",
		age: "Not set",
		deity: "Not set",
		size: 1,
		sizeName: "Small",
		keyability: "int",
		languages: [],
		rituals: [],
		resistances: ["acid 1", "fire 1"],
		attributes: {
			ancestryhp: 5,
			classhp: 8,
			bonushp: 0,
			bonushpPerLevel: 0,
			speed: 25,
			speedBonus: 0,
		},
		abilities: {
			str: 16,
			dex: 19,
			con: 17,
			int: 19,
			wis: 10,
			cha: 13,
			breakdown: {
				ancestryFree: [],
				ancestryBoosts: [],
				ancestryFlaws: [],
				backgroundBoosts: [],
				classBoosts: [],
				mapLevelledBoosts: { 1: ["Int", "Con", "Dex", "Str"] },
			},
		},
		proficiencies: {
			classDC: 2,
			perception: 2,
			fortitude: 4,
			reflex: 4,
			will: 2,
			heavy: 0,
			medium: 2,
			light: 2,
			unarmored: 2,
			advanced: 0,
			martial: 0,
			simple: 2,
			unarmed: 2,
			castingArcane: 0,
			castingDivine: 0,
			castingOccult: 0,
			castingPrimal: 0,
			acrobatics: 2,
			arcana: 2,
			athletics: 2,
			crafting: 2,
			deception: 0,
			diplomacy: 0,
			intimidation: 0,
			medicine: 2,
			nature: 0,
			occultism: 2,
			performance: 0,
			religion: 0,
			society: 0,
			stealth: 0,
			survival: 0,
			thievery: 0,
		},
		mods: {},
		feats: [
			["Ride", null, "Awarded Feat", 1],
			["Combat Climber", null, "Awarded Feat", 1],
			["Alchemical Crafting", null, "Awarded Feat", 1],
			["Rough Rider", null, "Ancestry Feat", 1],
			["Tailed Goblin", null, "Heritage", 1],
			["Quick Bomber", null, "Class Feat", 1],
		],
		specials: [
			"Formula Book",
			"Bomber",
			"Alchemy",
			"Advanced Alchemy",
			"acid",
			"fire",
			"Infused Reagents",
			"Quick Alchemy",
			"Darkvision",
			"Tailed Goblin",
		],
		lores: [["Academia", 2]],
		equipmentContainers: {
			"ea367bdd-d415-439e-924f-de070809fdde": {
				containerName: "Backpack",
				bagOfHolding: false,
				backpack: true,
			},
		},
		equipment: [
			["Backpack", 1],
			["Bedroll", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Chalk", 10, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Flint and Steel", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Rope", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Rations", 2, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Torch", 5, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Waterskin", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Soap", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Alchemist's Tools", 1],
		],
		specificProficiencies: {
			trained: [],
			expert: [],
			master: [],
			legendary: [],
		},
		weapons: [
			{
				name: "Poi",
				qty: 1,
				prof: "simple",
				die: "d4",
				pot: 0,
				str: "",
				mat: null,
				display: "Poi",
				runes: [],
				damageType: "B",
				attack: 7,
				damageBonus: 3,
				extraDamage: [],
			},
			{
				name: "Crossbow",
				qty: 1,
				prof: "simple",
				die: "d8",
				pot: 0,
				str: "",
				mat: null,
				display: "Crossbow",
				runes: [],
				damageType: "P",
				attack: 7,
				damageBonus: 0,
				extraDamage: [],
			},
		],
		money: { cp: 0, sp: 3, gp: 3, pp: 0 },
		armor: [
			{
				name: "Buckle Armor",
				qty: 1,
				prof: "light",
				pot: 0,
				res: "",
				mat: null,
				display: "Buckle Armor",
				worn: true,
				runes: [],
			},
		],
		spellCasters: [],
		focusPoints: 0,
		focus: {},
		formula: [],
		acTotal: {
			acProfBonus: 3,
			acAbilityBonus: 3,
			acItemBonus: 2,
			acTotal: 18,
			shieldBonus: null,
		},
		pets: [],
		familiars: [],
	},
};

const grant = {
	success: true,
	build: {
		name: "Grant",
		class: "Fighter",
		dualClass: null,
		level: 1,
		ancestry: "Human",
		heritage: "Tailed Goblin",
		background: "Magical Experiment (Resistant Skin)",
		alignment: "N",
		gender: "Not set",
		age: "Not set",
		deity: "Not set",
		size: 1,
		sizeName: "Small",
		keyability: "int",
		languages: [],
		rituals: [],
		resistances: ["acid 1", "fire 1"],
		attributes: {
			ancestryhp: 6,
			classhp: 8,
			bonushp: 0,
			bonushpPerLevel: 0,
			speed: 25,
			speedBonus: 0,
		},
		abilities: {
			str: 16,
			dex: 19,
			con: 17,
			int: 19,
			wis: 10,
			cha: 13,
			breakdown: {
				ancestryFree: [],
				ancestryBoosts: [],
				ancestryFlaws: [],
				backgroundBoosts: [],
				classBoosts: [],
				mapLevelledBoosts: { 1: ["Int", "Con", "Dex", "Str"] },
			},
		},
		proficiencies: {
			classDC: 2,
			perception: 2,
			fortitude: 4,
			reflex: 4,
			will: 2,
			heavy: 0,
			medium: 2,
			light: 2,
			unarmored: 2,
			advanced: 0,
			martial: 0,
			simple: 2,
			unarmed: 2,
			castingArcane: 0,
			castingDivine: 0,
			castingOccult: 0,
			castingPrimal: 0,
			acrobatics: 2,
			arcana: 2,
			athletics: 2,
			crafting: 2,
			deception: 0,
			diplomacy: 0,
			intimidation: 0,
			medicine: 2,
			nature: 0,
			occultism: 2,
			performance: 0,
			religion: 0,
			society: 0,
			stealth: 0,
			survival: 0,
			thievery: 0,
		},
		mods: {},
		feats: [
			["Ride", null, "Awarded Feat", 1],
			["Combat Climber", null, "Awarded Feat", 1],
			["Alchemical Crafting", null, "Awarded Feat", 1],
			["Rough Rider", null, "Ancestry Feat", 1],
			["Tailed Goblin", null, "Heritage", 1],
			["Quick Bomber", null, "Class Feat", 1],
		],
		specials: [
			"Formula Book",
			"Bomber",
			"Alchemy",
			"Advanced Alchemy",
			"acid",
			"fire",
			"Infused Reagents",
			"Quick Alchemy",
			"Darkvision",
			"Tailed Goblin",
		],
		lores: [["Academia", 2]],
		equipmentContainers: {
			"ea367bdd-d415-439e-924f-de070809fdde": {
				containerName: "Backpack",
				bagOfHolding: false,
				backpack: true,
			},
		},
		equipment: [
			["Backpack", 1],
			["Bedroll", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Chalk", 10, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Flint and Steel", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Rope", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Rations", 2, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Torch", 5, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Waterskin", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Soap", 1, "ea367bdd-d415-439e-924f-de070809fdde"],
			["Alchemist's Tools", 1],
		],
		specificProficiencies: {
			trained: [],
			expert: [],
			master: [],
			legendary: [],
		},
		weapons: [
			{
				name: "Poi",
				qty: 1,
				prof: "simple",
				die: "d4",
				pot: 0,
				str: "",
				mat: null,
				display: "Poi",
				runes: [],
				damageType: "B",
				attack: 7,
				damageBonus: 3,
				extraDamage: [],
			},
			{
				name: "Crossbow",
				qty: 1,
				prof: "simple",
				die: "d8",
				pot: 0,
				str: "",
				mat: null,
				display: "Crossbow",
				runes: [],
				damageType: "P",
				attack: 7,
				damageBonus: 0,
				extraDamage: [],
			},
		],
		money: { cp: 0, sp: 3, gp: 3, pp: 0 },
		armor: [
			{
				name: "Buckle Armor",
				qty: 1,
				prof: "light",
				pot: 0,
				res: "",
				mat: null,
				display: "Buckle Armor",
				worn: true,
				runes: [],
			},
		],
		spellCasters: [],
		focusPoints: 0,
		focus: {},
		formula: [],
		acTotal: {
			acProfBonus: 3,
			acAbilityBonus: 3,
			acItemBonus: 2,
			acTotal: 18,
			shieldBonus: null,
		},
		pets: [],
		familiars: [],
	},
};

const characterSheets = [bombGoblin, fynl, grant];

export const initTrackerValues = characterSheets.map((char) => {
	return {
		name: char.build.name,
		class: char.build.class,
		AC: char.build.acTotal.acTotal,
		HP: calculateHP(char.build.attributes, char.build.abilities.con),
	};
});
interface charAttributes {
	ancestryhp: number;
	classhp: number;
	bonushp: number;
}
function calculateHP(
	{ ancestryhp, classhp, bonushp }: charAttributes,
	con: number
){
	const conMod = Math.floor((con - 10) / 2);
	return ancestryhp + classhp + bonushp + conMod;
}

export default characterSheets;
