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

function generateVenue(): string {
    const venue = [
        "In the middle of the street",
        "In a public plaza",
        "Down a side alley",
        "Inside a local business",
        "Next to or in a public park",
        "At a mass-transit station"
    ];
    return venue[Math.floor(Math.random() * venue.length)];
}

function generateInvolvement(): string {
    const involvement = [
        "A sympathetic participant appeals to them",
        "Ways around it are all dangerous/blocked",
        "It happens immediately around them",
        "A valuable thing looks snatchable amid it",
        "A participant offers a reward for help",
        "Someone mistakenly involves the PCs in it",
        "The seeming way out just leads deeper in",
        "Responsibility is somehow pinned on them"
    ];
    return involvement[Math.floor(Math.random() * involvement.length)];
}

function generateNature(): string {
    const natures = [
        "A parade or festival is being disrupted",
        "Innocents are being assaulted",
        "An establishment is being robbed",
        "A disturbance over local politics happens",
        "Someone is being blamed for something",
        "Fires or building collapses are happening",
        "A medical emergency is happening",
        "Someone’s trying to cheat the PCs",
        "A vehicle accident is happening",
        "A religious ceremony is being disrupted"
    ];
    return natures[Math.floor(Math.random() * natures.length)];
}

function generateReason(): string {
    const reasons = [
        "Money, extortion, payment due, debts",
        "Respect, submission to social authority",
        "Grudges, ethnic resentment, gang payback",
        "Politics, religion, or other ideology"
    ];
    return reasons[Math.floor(Math.random() * reasons.length)];
}

function generateAntagonists(): string {
    const antagonists = [
        "A local bully and their thugs",
        "A ruthless political boss and their zealots",
        "Violent criminals",
        "Religious fanatics",
        "A blisteringly obnoxious offworlder",
        "Corrupt or over-strict government official",
        "A mob of intoxicated locals",
        "A ranting demagogue and their followers",
        "A stupidly bull-headed local grandee",
        "A very capable assassin or strong-arm",
        "A self-centered local scion of power",
        "A confused foreigner or backwoodsman"
    ];
    return antagonists[Math.floor(Math.random() * antagonists.length)];
}

function generateFeatures(): string {
    const features = [
        "Heavy traffic running through the place",
        "Music blaring at deafening volumes",
        "Two groups present that detest each other",
        "Large delivery taking place right there",
        "Swarm of schoolkids or feral youth",
        "Insistent soapbox preacher here",
        "Several pickpockets working the crowd",
        "A kiosk is tipping over and spilling things",
        "Streetlights are out or visibility is low",
        "A cop patrol is here and reluctant to act",
        "PC-hostile reporters are recording here",
        "Someone’s trying to sell something to PCs",
        "Feral dogs or other animals crowd here",
        "Unrelated activists are protesting here",
        "Street kids are trying to steal from the PCs",
        "GPS maps are dangerously wrong here",
        "Downed power lines are a danger here",
        "Numerous open manholes and utility holes",
        "The street’s blockaded by something",
        "Crowds so thick one can barely move"
    ];
    return features[Math.floor(Math.random() * features.length)];
}

function generateUrbanEncounter(): Array {
    let venue = generateVenue();
    let involvement = generateInvolvement();
    let nature = generateNature();
    let reason = generateReason();
    let antagonists = generateAntagonists();
    let features = generateFeatures();
    return [venue, involvement, nature, reason, antagonists, features];
}
