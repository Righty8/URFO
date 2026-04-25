/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         URFO MILITARY DATABASE — UNIT DEFINITIONS        ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * HOW TO USE:
 *
 * 1. PLATOONS  — the building blocks. Define `equipment` and `personnel` here.
 * 2. COMPANIES — reference platoon IDs in `composition`.
 * 3. BATTALIONS — reference company IDs in `composition`.
 * 4. REGIMENTS  — reference battalion IDs in `composition`.
 * 5. DIVISIONS  — reference regiment AND/OR battalion IDs (both work!).
 * 6. ARMIES     — add division IDs to the `divisions` array at the bottom.
 *
 * Equipment and personnel automatically sum up through the entire tree.
 * You never need to manually calculate totals — just define the platoons.
 *
 * COMPOSITION FORMAT:
 *   { id: "unit_id", count: 3 }
 *   { id: "unit_id", count: 1, label: "Custom Label" }  ← optional label override
 *
 * LEVELS: "platoon" | "company" | "battalion" | "regiment" | "division"
 *
 * EQUIPMENT KEYS: use consistent names across all units.
 * Example keys: "MBT", "LBM-10", "BTR-K84", "BMP-K84", "BMP-5L",
 *               "DAR-90", "KL-03/A", "BMP-4", "K-65AT", "Dana SPG",
 *               "Bulat MLRS", "KBM-90 Rys", "Bumerang", "Typhoon-U"
 *
 * ─── ICONS ────────────────────────────────────────────────────
 * Optional fields on any unit:
 *   type: "tank"         ← picks the NATO-style icon shape
 *   iconColor: "recon"   ← optional color keyword OR any CSS color
 *
 * Available types:
 *   infantry,  tank,
 *   ifv_tracked, ifv_heavy, ifv_wheeled,
 *   apc_tracked, apc_wheeled,
 *   car, truck,
 *   artillery, spg, mortar, mlrs, atgm,
 *   aaa_towed, aaa_tracked, missile_ad,
 *   recon, engineers, mp, medical, signal, logistics, hq
 *
 * Color keywords (defined in urfo_TOandE.html → ICON_COLORS):
 *   standard, recon, arty, ad, engineer, logistics, command, hostile
 *   (or use any CSS color string: "#3af0f0", "tomato", etc.)
 *
 * To add a new icon: edit the ICONS dict in URFO_TOandE.html.
 */
const UNITS = {

  // ════════════════════════════════════════════════════════════
  //  P L A T O O N S
  //  Define equipment{} and personnel here. These are leaf nodes.
  // ════════════════════════════════════════════════════════════

  "plt_tank": {
    name: "Tank Platoon",
    level: "platoon",
    type: "tank",
    notes: "4 MBT + 4 LBM-10 scout cars. The LBM-10 gunner assists tank crews with maintenance when not in combat, giving 4 people working each tank instead of 3. MBT is any K-84 variant, Okryiv also has K-95B3 and Orvask has K-74",
    equipment: {
      "MBT": 4,
      "LBM-10": 4
    },
    personnel: 24   // 4 × 3 tank crew + 4 × 3 LBM-10 crew
  },

  "plt_tank_hq": {
    name: "Tank Company HQ",
    level: "platoon",
    type: "cmd_tank",
    notes: "Company command element. Command tank + LBM-10.",
    equipment: {
      "MBT": 1,
      "LBM-10": 1,
      "KRaZ-255B": 1
    },
    personnel: 8
  },

  "btn_tank_hq": {
    name: "Tank Battalion HQ",
    level: "platoon",
    type: "cmd_tank",
    notes: "Tank battalion command element. 2 Typhoon-U command trucks and half-platoon of tanks. 250 support personnel.",
    equipment: {
      "MBT": 2,
      "LBM-10": 2,
      "Typhoon-U": 2,
      "Support": 250
    },
    personnel: 266
  },

  "plt_btr_k84": {
    name: "BTR-K84 Platoon",
    level: "platoon",
    type: "ifv_heavy",
    notes: "BTR-K84 heavy APCs on K-84 hull. 30mm cannon + twin ATGMs. Unmanned turret, carries 5 infantry. Built from phased-out K-84BM/EM hulls.",
    equipment: {
      "BTR-K84": 4,
      "Infantry": 20
    },
    personnel: 32   // 4 × 3 crew + 15 infantry
  },

  "plt_btr_k84_hq": {
    name: "BTR-K84 Company HQ",
    level: "platoon",
    type: "ifv_heavy",
    iconColor: "command",
    notes: "Company command element. Command BTR-K84, command infantry and logistics KRaZ-255B.",
    equipment: {
      "BTR-K84": 1,
      "Infantry": 5,
      "KRaZ-255B": 1
    },
    personnel: 10
  },

  "plt_bmp_k84": {
    name: "BMP-K84 Platoon",
    level: "platoon",
    type: "ifv_heavy",
    notes: "BMP-K84 heavy IFVs on K-84 hull. 57mm + twin top-attack ATGMs. Unmanned turret, carries 5 infantry. Built from phased-out K-84BM/EM hulls.",
    equipment: {
      "BMP-K84": 4,
      "Infantry": 20
    },
    personnel: 32
  },

  "plt_bmp_k84_hq": {
    name: "BMP-K84 Company HQ",
    level: "platoon",
    type: "ifv_heavy",
    iconColor: "command",
    notes: "Company command element. Command BMP-K84, command infantry and logistics KRaZ-255B.",
    equipment: {
      "BMP-K84": 1,
      "Infantry": 5,
      "KRaZ-255B": 1
    },
    personnel: 10
  },

  "btn_heavy_mech_hq": {
    name: "Heavy Mechanized Battalion HQ",
    level: "platoon",
    type: "cmd_ifv_heavy",
    notes: "Heavy Mechanized battalion command element. 2 Typhoon-U command trucks and mixed platoon of HIFV with infantry. 250 support personnel.",
    equipment: {
      "BTR-K84": 1,
      "BMP-K84": 1,
      "Infantry": 10,
      "Typhoon-U": 2,
      "Support": 250
    },
    personnel: 270
  },

  "reg_tank_hq": {
    name: "Tank Regimental HQ",
    level: "platoon",
    type: "cmd_tank",
    notes: "Regimental command.",
    equipment: {
      "MBT": 3,
      "LBM-10": 3,
      "Typhoon-U": 1,
      "Support": 1000
    },
    personnel: 1020
  },

  "reg_mech_inf_hq": {
    name: "Mechanized Infantry Regimental HQ",
    level: "platoon",
    type: "ifv_tracked",
    notes: "Regimental command.",
    equipment: {
      "Typhoon-U": 3,
      "Support": 1000
    },
    personnel: 1012
  },

  "plt_bmp_5l": {
    name: "BMP-5L Platoon",
    level: "platoon",
    type: "ifv_tracked",
    notes: "BMP-5L IFV. 30mm cannon + twin ATGMs. Unmanned turret, carries 6 infantry.",
    equipment: {
      "BMP-5L": 3,
      "Infantry": 18
    },
    personnel: 27   // 4 × 3 crew + 15 infantry
  },

  "plt_bmp_5l_hq": {
    name: "BMP-5L Company HQ",
    level: "platoon",
    type: "ifv_tracked",
    iconColor: "command",
    notes: "Company command element. Command BMP-5L, command infantry and logistics KRaZ-255B.",
    equipment: {
      "BMP-5L": 1,
      "Infantry": 6,
      "KRaZ-255B": 1
    },
    personnel: 11   // 4 × 3 crew + 15 infantry
  },

  "btn_bmp_5l_hq": {
    name: "BMP-5L Battalion HQ",
    level: "platoon",
    type: "cmd_tank",
    notes: "IFV battalion command element. 2 Typhoon-U command trucks and 2 IFVs. 250 support personnel.",
    equipment: {
      "BMP-5L": 2,
      "Infantry": 12,
      "Typhoon-U": 2,
      "Support": 250
    },
    personnel: 272
  },

  "plt_atgm": {
    name: "ATGM Platoon",
    level: "platoon",
    type: "atgm",
    notes: "4 Tigr with 8 ATGMs. 3 dismounted ATGM teams (3) in a Tigr each.",
    equipment: {
      "Tigr Kornet-D": 4,
      "Tigr": 3,
      "ATGM Team": 3
    },
    personnel: 27   // 4 × 3 Kornet-D crew + 6 Tigr crew + 3 × 3 ATGM team
  },

  "plt_manpads": {
    name: "MANPADS Platoon",
    level: "platoon",
    type: "missile_ad",
    iconColor: "ad",
    notes: "3 dismounted MANPADS teams (2) in a Tigr each.",
    equipment: {
      "Tigr": 3,
      "MANPADS Team": 3
    },
    personnel: 12   // 6 Tigr crew + 3 × 2 MANPADS team
  },

  "bat_support_hq": {
    name: "Support Battalion HQ",
    level: "platoon",
    type: "truck",
    notes: "Support battalion command element. 50 support personnel.",
    equipment: {
      "Support": 50
    },
    personnel: 50
  },

  "plt_dar90": {
    name: "DAR-90 Platoon",
    level: "platoon",
    type: "apc_wheeled",
    notes: "DAR-90 APC. 30mm cannon. Manned turret, carries 8 infantry.",
    equipment: {
      "DAR-90": 3,
      "Infantry": 24
    },
    personnel: 33   // 3 × 3 crew + 24 infantry
  },

  "plt_dar90_hq": {
    name: "DAR-90 Company HQ",
    level: "platoon",
    type: "apc_wheeled",
    iconColor: "command",
    notes: "Company command element. Command DAR-90, command infantry and logistics KRaZ-255B.",
    equipment: {
      "DAR-90": 1,
      "Infantry": 8,
      "KRaZ-255B": 1
    },
    personnel: 13   // 3 crew + 8 infantry + 2 truckers
  },

  "btn_dar90_hq": {
    name: "DAR-90 Battalion HQ",
    level: "platoon",
    type: "apc_wheeled",
    iconColor: "command",
    notes: "APC battalion command element. 2 Typhoon-U command trucks and 2 APCs. 250 support personnel.",
    equipment: {
      "DAR-90": 2,
      "Infantry": 16,
      "Typhoon-U": 2,
      "Support": 250
    },
    personnel: 276
  },

  "plt_recon": {
    name: "Recon Platoon",
    level: "platoon",
    type: "ifv_wheeled",
    iconColor: "recon",
    notes: "2 KBM-90 Rys' + 2 Bumerang IFV with 4-men scout teams.",
    equipment: {
      "KBM-90 Rys": 2,
      "Bumerang": 2,
      "Recon Infantry": 8
    },
    personnel: 20   // 12 vehicle crew + 8 scouts
  },

  "plt_recon_hq": {
    name: "Recon Company HQ",
    level: "platoon",
    type: "recon",
    iconColor: "command",
    notes: "Company command. 1 Bumerang + Typhoon-U.",
    equipment: {
      "Bumerang": 1,
      "Recon Infantry": 4
    },
    personnel: 7 // 3 crew + 4 scouts
  },

  "btn_recon_hq": {
    name: "Recon Battalion HQ",
    level: "platoon",
    type: "recon",
    iconColor: "command",
    notes: "Recon battalion command element. 1 Bumerang and 1 KRaZ-255B supply truck. 75 support personnel.",
    equipment: {
      "Bumerang": 1,
      "KRaZ-255B": 1,
      "Support": 75
    },
    personnel: 80 // 3 crew + 2 drivers + 75 support
  },

  "plt_spg": {
    name: "SPG Platoon",
    level: "platoon",
    type: "spg",
    iconColor: "arty",
    notes: "3 × 2S19/M SPG. 152mm, fully autoloaded, 4 crew each.",
    equipment: {
      "2S19/M SPG": 3
    },
    personnel: 12   // 3 × 4 crew
  },

  "plt_spg_hq": {
    name: "SPG Battery HQ",
    level: "platoon",
    type: "spg",
    iconColor: "arty",
    notes: "Battery command. 2 Typhoon-U trucks equipped with artillery calculators. 50 support personnel.",
    equipment: {
      "Typhoon-U": 2,
      "Support": 50
    },
    personnel: 54
  },

  "bat_spg_hq": {
    name: "SPG Battalion HQ",
    level: "platoon",
    type: "hq",
    notes: "Battalion command. 1 Typhoon-U, 6 KRaZ-255B supply trucks and 100 support personnel.",
    equipment: {
      "Typhoon-U": 1,
      "KRaZ-255B": 6,
      "Support": 100
    },
    personnel: 114
  },

  "plt_mrtr": {
    name: "Mortar Platoon",
    level: "platoon",
    type: "spg",
    iconColor: "arty",
    notes: "3 × 2S19/M SPG. 152mm, fully autoloaded, 4 crew each.",
    equipment: {
      "DAR-90 Mortar": 3
    },
    personnel: 12   // 3 × 4 crew
  },

  "plt_mrtr_hq": {
    name: "Mortar Battery HQ",
    level: "platoon",
    type: "spg",
    iconColor: "arty",
    notes: "Battery command. 2 Typhoon-U trucks. 50 support personnel.",
    equipment: {
      "Typhoon-U": 2,
      "Support": 50
    },
    personnel: 54
  },

  "bat_mrtr_hq": {
    name: "Mortar Battalion HQ",
    level: "platoon",
    type: "hq",
    notes: "Battalion command. 1 Typhoon-U, 6 KRaZ-255B supply trucks and 100 support personnel.",
    equipment: {
      "Typhoon-U": 1,
      "KRaZ-255B": 6,
      "Support": 100
    },
    personnel: 114
  },

  "plt_mlrs": {
    name: "MLRS Platoon",
    level: "platoon",
    type: "mlrs",
    iconColor: "arty",
    notes: "2x Bulat MLRS, 14x rockets each, 4 crew each.",
    equipment: {
      "Bulat MLRS": 2
    },
    personnel: 8   // 2 × 4 crew
  },

  "plt_mlrs_hq": {
    name: "MLRS Battery HQ",
    level: "platoon",
    type: "mlrs",
    iconColor: "arty",
    notes: "Battery command. 2 Typhoon-U trucks. 50 support personnel.",
    equipment: {
      "Typhoon-U": 2,
      "Support": 50
    },
    personnel: 54
  },

  "bat_mlrs_hq": {
    name: "Mortar Battalion HQ",
    level: "platoon",
    type: "hq",
    notes: "Battalion command. 1 Typhoon-U, 6 KRaZ-255B supply trucks and 100 support personnel.",
    equipment: {
      "Typhoon-U": 1,
      "KRaZ-255B": 6,
      "Support": 100
    },
    personnel: 114
  },

  "plt_dk12": {
    name: "SHORAD Platoon",
    level: "platoon",
    type: "aaa_tracked",
    iconColor: "ad",
    notes: "3 × DK-12 Tunguska. Short-range air defence. Follows frontline units.",
    equipment: {
      "DK-12 Tunguska": 3
    },
    personnel: 12
  },

  "plt_dk58": {
    name: "MRAD Platoon",
    level: "platoon",
    type: "missile_ad",
    iconColor: "ad",
    notes: "2 × DK-58 Vityaz. Medium-range SAM. Self-contained TELAR with integrated radar.",
    equipment: {
      "DK-58 Vityaz": 2
    },
    personnel: 8
  },

  "plt_dk56": {
    name: "LRAD Platoon",
    level: "platoon",
    type: "missile_ad",
    iconColor: "ad",
    notes: "2 × DK-56 Rubezh. Long-range tracked SAM system. Area denial.",
    equipment: {
      "DK-56 Rubezh": 2
    },
    personnel: 8
  },

  "plt_ad_hq": {
    name: "Air Defense Battery HQ",
    level: "platoon",
    type: "truck",
    iconColor: "ad",
    notes: "Company command. 2 Typhoon-U and 50 support personnel.",
    equipment: {
      "Typhoon-U": 2,
      "Support": 50
    },
    personnel: 54
  },

  "plt_ad_bat_hq": {
    name: "AD Battalion HQ",
    level: "platoon",
    type: "hq",
    notes: "Standard battalion command element. 2 Typhoon-U command trucks and 6 KRaZ-255B supply trucks, 100 support personnel.",
    equipment: {
      "Typhoon-U": 1,
      "KRaZ-255B": 6,
      "Support": 100
    },
    personnel: 114
  },

  "plt_bat_hq": {
    name: "Battalion HQ",
    level: "platoon",
    type: "hq",
    notes: "Standard battalion command element. 2 Typhoon-U command trucks.",
    equipment: {
      "Typhoon-U": 2
    },
    personnel: 20
  },

  "plt_reg_hq": {
    name: "Regimental HQ",
    level: "platoon",
    type: "hq",
    notes: "Regimental command. 1 Typhoon-U + staff vehicles.",
    equipment: {
      "Typhoon-U": 1
    },
    personnel: 30
  },


  // ════════════════════════════════════════════════════════════
  //  C O M P A N I E S
  //  Reference platoon IDs in composition[].
  // ════════════════════════════════════════════════════════════

  "coy_tank": {
    name: "Tank Company",
    level: "company",
    type: "tank",
    notes: "3 tank platoons (12 MBT) + HQ tank. 13 MBT total.",
    composition: [
      { id: "plt_tank_hq", count: 1, label: "Command Platoon"  },
      { id: "plt_tank",    count: 1, label: "Manoeuvre Platoons"  },
      { id: "plt_tank",    count: 1, label: "Manoeuvre Platoons"  },
      { id: "plt_tank",    count: 1, label: "Manoeuvre Platoons"  }
    ]
  },

  "coy_btr_k84": {
    name: "BTR-K84 Company",
    level: "company",
    type: "ifv_heavy",
    notes: "3 platoons of BTR-K84 heavy IFVs + HQ. Close infantry support alongside MBTs.",
    composition: [
      { id: "plt_btr_k84_hq", count: 1, label: "Command Platoon"  },
      { id: "plt_btr_k84",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_btr_k84",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_btr_k84",  count: 1, label: "Manoeuvre Platoons" }
    ]
  },

  "coy_bmp_k84": {
    name: "BMP-K84 Company",
    level: "company",
    type: "ifv_heavy",
    notes: "3 platoons of BMP-K84 heavy IFVs + HQ. Focus on AT, but can also engage air targets with Timed Fused shells.",
    composition: [
      { id: "plt_bmp_k84_hq", count: 1, label: "Command Platoon"  },
      { id: "plt_bmp_k84",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_bmp_k84",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_bmp_k84",  count: 1, label: "Manoeuvre Platoons" }
    ]
  },

  "coy_bmp_5l": {
    name: "BMP-5L Company",
    level: "company",
    type: "ifv_tracked",
    notes: "3 platoons of BMP-5L IFVs + HQ.",
    composition: [
      { id: "plt_bmp_5l_hq", count: 1, label: "Command Platoon" },
      { id: "plt_bmp_5l",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_bmp_5l",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_bmp_5l",  count: 1, label: "Manoeuvre Platoons" }
    ]
  },

  "coy_dar90": {
    name: "DAR-90 Company",
    level: "company",
    type: "apc_wheeled",
    notes: "3 platoons of DAR-90 APCs + HQ.",
    composition: [
      { id: "plt_dar90_hq", count: 1, label: "Command Platoon" },
      { id: "plt_dar90",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_dar90",  count: 1, label: "Manoeuvre Platoons" },
      { id: "plt_dar90",  count: 1, label: "Manoeuvre Platoons" }
    ]
  },

  "coy_atgm": {
    name: "ATGM Company",
    level: "company",
    type: "atgm",
    notes: "3 platoons of DAR-90 APCs + HQ.",
    composition: [
      { id: "plt_atgm",  count: 1, label: "Fire Platoons" },
      { id: "plt_atgm",  count: 1, label: "Fire Platoons" },
      { id: "plt_atgm",  count: 1, label: "Fire Platoons" }
    ]
  },

  "coy_aa": {
    name: "MANPADS Company",
    level: "company",
    type: "manpads",
    notes: "3 platoons of DAR-90 APCs + HQ.",
    composition: [
      { id: "plt_manpads",  count: 1, label: "Fire Platoons" },
      { id: "plt_manpads",  count: 1, label: "Fire Platoons" },
      { id: "plt_manpads",  count: 1, label: "Fire Platoons" }
    ]
  },

  "coy_recon": {
    name: "Recon Company",
    level: "company",
    type: "ifv_wheeled",
    iconColor: "recon",
    notes: "3 recon platoons. 6 Rys' + 7 Bumerang. Covers a wide frontage.",
    composition: [
      { id: "plt_recon_hq", count: 1, label: "Command Platoon" },
      { id: "plt_recon",    count: 1, label: "Reconnaissance Platoons" },
      { id: "plt_recon",    count: 1, label: "Reconnaissance Platoons" },
      { id: "plt_recon",    count: 1, label: "Reconnaissance Platoons" }
    ]
  },

  "coy_spg_battery": {
    name: "SPG Battery",
    level: "company",
    type: "mortar",
    iconColor: "arty",
    notes: "3 platoons of 2S19/M (9 guns) + HQ platoon.",
    composition: [
      { id: "plt_spg_hq", count: 1, label: "Command Platoon" },
      { id: "plt_spg",    count: 1, label: "SPG Platoons" },
      { id: "plt_spg",    count: 1, label: "SPG Platoons"  },
      { id: "plt_spg",    count: 1, label: "SPG Platoons"  }
    ]
  },

  "coy_mrtr_battery": {
    name: "Mortar Battery",
    level: "company",
    type: "mortar",
    iconColor: "arty",
    notes: "3 platoons of DAR-90 Mortar (9 guns) and HQ platoon.",
    composition: [
      { id: "plt_mrtr_hq", count: 1, label: "Command Platoon" },
      { id: "plt_mrtr",    count: 1, label: "SPG Platoons" },
      { id: "plt_mrtr",    count: 1, label: "SPG Platoons"  },
      { id: "plt_mrtr",    count: 1, label: "SPG Platoons"  }
    ]
  },

  "coy_mlrs_battery": {
    name: "MLRS Battery",
    level: "company",
    type: "mlrs",
    iconColor: "arty",
    notes: "3 platoons of Bulat MLRS (6 Salovs) and HQ platoon.",
    composition: [
      { id: "plt_mlrs_hq", count: 1, label: "Command Platoon" },
      { id: "plt_mlrs",    count: 1, label: "MLRS Platoons" },
      { id: "plt_mlrs",    count: 1, label: "MLRS Platoons"  },
      { id: "plt_mlrs",    count: 1, label: "MLRS Platoons"  }
    ]
  },

  "coy_ad_shorad": {
    name: "SHORAD Battery",
    level: "company",
    type: "aaa_tracked",
    iconColor: "ad",
    notes: "4 platoons of DK-12 Tunguska (12 vehicles). Short-range air defence, attached to frontline regiments.",
    composition: [
      { id: "plt_ad_hq", count: 1, label: "Command Platoon" },
      { id: "plt_dk12", count: 1, label: "SHORAD Platoons" },
      { id: "plt_dk12", count: 1, label: "SHORAD Platoons" },
      { id: "plt_dk12", count: 1, label: "SHORAD Platoons" }
    ]
  },

  "coy_ad_mrad": {
    name: "MRAD Battery",
    level: "company",
    type: "missile_ad",
    iconColor: "ad",
    notes: "2 platoons of DK-58 Vityaz (4 vehicles). Medium-range SAM layer.",
    composition: [
      { id: "plt_ad_hq", count: 1, label: "Command Platoon" },
      { id: "plt_dk58", count: 1, label: "MRAD Platoons" },
      { id: "plt_dk58", count: 1, label: "MRAD Platoons" }
    ]
  },

  "coy_ad_lrad": {
    name: "LRAD Battery",
    level: "company",
    type: "missile_ad",
    iconColor: "ad",
    notes: "2 platoons of DK-56 Rubezh (4 vehicles). Long-range area denial SAM.",
    composition: [
      { id: "plt_ad_hq", count: 1, label: "Command Platoon" },
      { id: "plt_dk56", count: 1, label: "MRAD Platoons" },
      { id: "plt_dk56", count: 1, label: "MRAD Platoons" }
    ]
  },


  // ════════════════════════════════════════════════════════════
  //  B A T T A L I O N S
  //  Reference company IDs in composition[].
  //  Can also reference platoons for HQ/support elements.
  // ════════════════════════════════════════════════════════════

  "bat_tank": {
    name: "Tank Battalion",
    level: "battalion",
    type: "tank",
    notes: "3 tank companies (39 MBT) + HQ. Core combat unit of the armoured regiment.",
    composition: [
      { id: "btn_tank_hq", count: 1, label: "Command Platoon" },
      { id: "coy_tank",   count: 1, label: "Manoeuvre Companies" },
      { id: "coy_tank",   count: 1, label: "Manoeuvre Companies" },
      { id: "coy_tank",   count: 1, label: "Manoeuvre Companies" }
    ]
  },

  "bat_heavy_mech": {
    name: "Heavy Mechanized Battalion",
    level: "battalion",
    type: "ifv_heavy",
    notes: "2× BTR-K84 companies + 1× BMP-K84 company. Built on phased-out K-84 hulls. Matches MBT speed and protection — infantry that can actually survive alongside tanks.",
    composition: [
      { id: "btn_heavy_mech_hq",  count: 1, label: "Command Platoon"  },
      { id: "coy_btr_k84", count: 1, label: "Manoeuvre Companies" },
      { id: "coy_btr_k84", count: 1, label: "Manoeuvre Companies" },
      { id: "coy_bmp_k84", count: 1, label: "Manoeuvre Companies" }
    ]
  },

  "bat_bmp_5l": {
    name: "BMP-5L Battalion",
    level: "battalion",
    type: "ifv_tracked",
    notes: "3 IFV companies (32 BMP-5L) + HQ. Core combat unit of the infantry regiment, trades speed for firepower.",
    composition: [
      { id: "btn_bmp_5l_hq", count: 1, label: "Command Platoon" },
      { id: "coy_bmp_5l",   count: 1, label: "Manoeuvre Companies" },
      { id: "coy_bmp_5l",   count: 1, label: "Manoeuvre Companies" },
      { id: "coy_bmp_5l",   count: 1, label: "Manoeuvre Companies" }
    ]
  },

  "bat_dar90": {
    name: "DAR-90 Battalion",
    level: "battalion",
    type: "apc_wheeled",
    notes: "3 APC companies (32 DAR-90) + HQ. Core combat unit of the infantry regiment, trades firepower for speed.",
    composition: [
      { id: "btn_dar90_hq", count: 1, label: "Command Platoon" },
      { id: "coy_dar90",   count: 1, label: "Manoeuvre Companies" },
      { id: "coy_dar90",   count: 1, label: "Manoeuvre Companies" },
      { id: "coy_dar90",   count: 1, label: "Manoeuvre Companies" }
    ]
  },

  "bat_atgm": {
    name: "ATGM Battalion",
    level: "battalion",
    type: "atgm",
    notes: "3 ATGM companies (12 Tigr Kornet-D, 9 dismounted ATGMs on Tigr) + HQ. Pure anti-tank role.",
    composition: [
      { id: "bat_support_hq", count: 1, label: "Command Platoon" },
      { id: "coy_atgm",   count: 1, label: "Fire Companies" },
      { id: "coy_atgm",   count: 1, label: "Fire Companies" },
      { id: "coy_atgm",   count: 1, label: "Fire Companies" }
    ]
  },

  "bat_aa": {
    name: "MANPADS Battalion",
    level: "battalion",
    type: "atgm",
    notes: "3 MANPADS companies (9 MANPADS) + HQ. Defence against low altitude air.",
    composition: [
      { id: "bat_support_hq", count: 1, label: "Command Platoon" },
      { id: "coy_aa",   count: 1, label: "Fire Companies" },
      { id: "coy_aa",   count: 1, label: "Fire Companies" },
      { id: "coy_aa",   count: 1, label: "Fire Companies" }
    ]
  },

  "bat_recon": {
    name: "Recon Battalion",
    level: "battalion",
    type: "ifv_wheeled",
    iconColor: "recon",
    notes: "3 recon companies + HQ. 18 KBM-90 Rys' + 22 Bumerang. Eyes and ears of the division.",
    composition: [
      { id: "btn_recon_hq", count: 1, label: "Command" },
      { id: "coy_recon",    count: 1, label: "Reconnaissance Companies" },
      { id: "coy_recon",    count: 1, label: "Reconnaissance Companies" },
      { id: "coy_recon",    count: 1, label: "Reconnaissance Companies" }
    ]
  },

  "bat_spg": {
    name: "SPG Battalion",
    level: "battalion",
    type: "spg",
    iconColor: "arty",
    notes: "3 batteries of 2S19/M (30 guns) + HQ. Organic fire support.",
    composition: [
      { id: "bat_spg_hq",      count: 1, label: "Command Platoon" },
      { id: "coy_spg_battery", count: 1, label: "SPG Batteries" },
      { id: "coy_spg_battery", count: 1, label: "SPG Batteries" },
      { id: "coy_spg_battery", count: 1, label: "SPG Batteries" }
    ]
  },

  "bat_mrtr": {
    name: "Mortar Battalion",
    level: "battalion",
    type: "mortar",
    iconColor: "arty",
    notes: "3 batteries of DAR-90 Mortar (30 guns) + HQ. Organic fire support.",
    composition: [
      { id: "bat_mrtr_hq",      count: 1, label: "Command Platoon" },
      { id: "coy_mrtr_battery", count: 1, label: "Mortar Batteries" },
      { id: "coy_mrtr_battery", count: 1, label: "Mortar Batteries" },
      { id: "coy_mrtr_battery", count: 1, label: "Mortar Batteries" }
    ]
  },

  "bat_mlrs": {
    name: "MLRS Battalion",
    level: "battalion",
    type: "mlrs",
    iconColor: "arty",
    notes: "2 batteries of Bulat MLRS (12 salvos) + HQ. Organic fire support.",
    composition: [
      { id: "bat_mlrs_hq",      count: 1, label: "Command Platoon" },
      { id: "coy_mlrs_battery", count: 1, label: "MLRS Batteries" },
      { id: "coy_mlrs_battery", count: 1, label: "MLRS Batteries" }
    ]
  },

  "bat_ad": {
    name: "Air Defense Battalion",
    level: "battalion",
    type: "missile_ad",
    iconColor: "ad",
    notes: "Three-layer defence: SHORAD/MRAD/LRAD. DK-12 Tunguska follows frontline, Vityaz covers medium altitude, Rubezh denies high-altitude approach.",
    composition: [
      { id: "plt_ad_bat_hq",    count: 1, label: "Command" },
      { id: "coy_ad_shorad", count: 1, label: "Air Defense Batteries" },
      { id: "coy_ad_mrad",   count: 1, label: "Air Defense Batteries" },
      { id: "coy_ad_lrad",   count: 1, label: "Air Defense Batteries" }
    ]
  },


  // ════════════════════════════════════════════════════════════
  //  R E G I M E N T S
  //  Reference battalion IDs in composition[].
  // ════════════════════════════════════════════════════════════

  "reg_tank": {
    name: "Tank Regiment",
    level: "regiment",
    type: "tank",
    notes: "3 tank battalions + 1 heavy mech battalion + HQ. ~3,100 personnel. Self-sufficient combined-arms force capable of independent operations.",
    composition: [
      { id: "reg_tank_hq",     count: 1, label: "Command" },
      { id: "bat_tank",       count: 1, label: "Manoeuvre Battalions" },
      { id: "bat_tank",       count: 1, label: "Manoeuvre Battalions" },
      { id: "bat_tank",       count: 1, label: "Manoeuvre Battalions" },
      { id: "bat_heavy_mech", count: 1, label: "Manoeuvre Battalions" }
    ]
  },

  "reg_mech_inf": {
    name: "Mech Infantry Regiment",
    level: "regiment",
    type: "ifv_tracked",
    notes: "1 BMP-5L IFV battalion + 2 DAR-90 battalion + 1 ATGM battalion + 1 AA battalion + HQ. ~3,100 personnel. Self-sufficient combined-arms force capable of independent operations.",
    composition: [
      { id: "reg_mech_inf_hq",     count: 1, label: "Command" },
      { id: "bat_bmp_5l",       count: 1, label: "Manoeuvre Battalions" },
      { id: "bat_dar90",       count: 1, label: "Manoeuvre Battalions" },
      { id: "bat_dar90",       count: 1, label: "Manoeuvre Battalions" },
      { id: "bat_atgm", count: 1, label: "Manoeuvre Battalions" },
      { id: "bat_aa", count: 1, label: "Manoeuvre Battalions" }
    ]
  },


  // ════════════════════════════════════════════════════════════
  //  D I V I S I O N S
  //  Can reference BOTH regiments AND standalone battalions.
  // ════════════════════════════════════════════════════════════

  "div_armored": {
    name: "Armoured Division",
    level: "division",
    type: "tank",
    notes: "Federal Army heavy strike division. Expeditionary — fights outside Okryiv. 4× C/S armoured regiments, organic fire support and recon. ~14,500 personnel.",
    composition: [
      { id: "reg_tank", count: 1, label: "Combat Regiments" },
      { id: "reg_tank", count: 1, label: "Combat Regiments" },
      { id: "reg_tank", count: 1, label: "Combat Regiments" },
      { id: "reg_mech_inf", count: 1, label: "Combat Regiments" },
      // Mech Infantry Regiment — add when defined
      { id: "bat_mrtr",  count: 1, label: "Fire Support" },
      { id: "bat_spg",  count: 1, label: "Fire Support" },
      { id: "bat_mlrs",  count: 1, label: "Fire Support" },
      { id: "bat_ad",    count: 1, label: "Fire Support" },
      { id: "bat_recon", count: 1, label: "Recon Battalion" }
    ]
  }

};


// ════════════════════════════════════════════════════════════
//  A R M I E S  —  Top-level organisation
//  Add division IDs to the `divisions` array.
// ════════════════════════════════════════════════════════════

const ARMIES = [
  {
    id: "federal",
    name: "Federal Army",
    fullName: "Федеральная Армия",
    commander: "Vladimir Bukreyev",
    personnel: 205000,
    color: "#ff9f1c",
    description: "Expeditionary force. Fights outside Okryiv. Modern equipment, combined-arms doctrine.",
    divisions: [
      "div_armored"
      // add more division IDs here as you define them
    ]
  },
  {
    id: "natguard",
    name: "National Guard",
    fullName: "Национальная Гвардия",
    commander: "Oleksandr Syrskyi",
    personnel: 430000,
    color: "#4af0ff",
    description: "Territorial defence. Never leaves Okryiv. Terrain-specialised divisions (Mountain, Mech, Arctic).",
    divisions: [
      // add NG division IDs here as you define them
    ]
  }
];
