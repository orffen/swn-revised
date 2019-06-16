/**
 * Copyright (c) 2019 Steve Simenic
 *
 * This file is part of the Stars Without Number Toolbox: Revised Edition
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function generateWeather() {
    var weathers = [
        "Takes place in daylight and clear weather",
        "Daylight, but fog, mist, rain or the like",
        "Daylight, but harsh seasonal weather",
        "Night encounter, but clear weather",
        "Night, with rain or other obscuring effects",
        "Night, with terrible weather and wind"
    ];
    return weathers[Math.floor(Math.random() * weathers.length)];
}
function generateNature() {
    var natures = [
        "Attack by pack of hostiles",
        "Ambush by single lone hostile",
        "Meet people who don't want to be met",
        "Encounter people in need of aid",
        "Encounter hostile creatures",
        "Nearby feature is somehow dangerous",
        "Nearby feature promises useful loot",
        "Meet hostiles that aren't immediately so"
    ];
    return natures[Math.floor(Math.random() * natures.length)];
}
function generateFriendlyCreatures() {
    var friendlies = [
        "Affable but reclusive hermit",
        "Local herd animal let loose to graze",
        "Government ranger or circuit judge",
        "Curious local animal",
        "Remote homesteader and family",
        "Working trapper or hunter",
        "Back-country villager or native",
        "Hiker or wilderness tourist",
        "Religious recluse or holy person",
        "Impoverished social exile"
    ];
    return friendlies[Math.floor(Math.random() * friendlies.length)];
}
function generateRange() {
    var ranges = [
        "Visible from a long distance away",
        "Noticed 1d4 hundred meters away",
        "Noticed only within 1d6 x 10 meters",
        "Noticed only when adjacent to the event"
    ];
    return ranges[Math.floor(Math.random() * ranges.length)];
}
function generateHostileCreatures() {
    var hostiles = [
        "Bandits in their wilderness hideout",
        "Dangerous locals looking for easy marks",
        "Rabid or diseased large predator",
        "Pack of hungry hunting beasts",
        "Herd of potentially dangerous prey animals",
        "Swarm of dangerous vermin",
        "Criminal seeking to evade the law",
        "Brutal local landowner and their men",
        "Crazed hermit seeking enforced solitude",
        "Friendly-seeming guide into lethal danger",
        "Harmless-looking but dangerous beast",
        "Confidence man seeking to gull the PCs"
    ];
    return hostiles[Math.floor(Math.random() * hostiles.length)];
}
function generateFeatures() {
    var features = [
        "Overgrown homestead",
        "Stream prone to flash-flooding",
        "Narrow bridge or beam over deep cleft",
        "Box canyon with steep sides",
        "Unstable hillside that slides if disturbed",
        "Long-lost crash site of a gravflyer",
        "Once-inhabited cave or tunnel",
        "Steep and dangerous cliff",
        "Quicksand-laden swamp or dust pit",
        "Ruins of a ghost town or lost hamlet",
        "Hunting cabin with necessities",
        "Ill-tended graveyard of a lost family stead",
        "Narrow pass that's easily blocked",
        "Dilapidated resort building",
        "Remote government monitoring outpost",
        "Illicit substance farm or processing center",
        "Old and forgotten battleground",
        "Zone overrun by dangerous plants",
        "Thick growth that lights up at a spark",
        "Abandoned vehicle"
    ];
    return features[Math.floor(Math.random() * features.length)];
}
function generateWildernessEncounter() {
    var weather = generateWeather();
    var nature = generateNature();
    var friendlies = generateFriendlyCreatures();
    var range = generateRange();
    var hostiles = generateHostileCreatures();
    var features = generateFeatures();
    return [weather, nature, friendlies, range, hostiles, features];
}
