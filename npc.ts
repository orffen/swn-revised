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

function generateBackground(): string {
    const backgrounds = [
        "The local underclass or poorest natives",
        "Common laborers or cube workers",
        "Aspiring burgeouise or upper class",
        "The elite of this society"
    ];
    let result = "";
    let roll = Math.floor((Math.random() * 6) + 1);
    if (roll == 5) {
        result = "Minority or foreigners - "
    } else if (roll == 6) {
        result = "Offworlders or exotics - "
    }
    result += backgrounds[Math.floor(Math.random() * backgrounds.length)];
    return result;
}

function generateRole(): string {
    const roles = [
        "Criminal, thug, thief, swindler",
        "Menial, cleaner, retail worker, servant",
        "Unskilled heavy leabor, porter, construction",
        "Skilled trade, electrician, mechanic, pilot",
        "Idea worker, programmer, writer",
        "Merchant, business owner, trader, banker",
        "Official, bureaucrat, courtier, clerk",
        "Military, soldier, enforcer, law officer"
    ];
    return roles[Math.floor(Math.random() * roles.length)];
}

function generateProblem(): string {
    const problems = [
        "They have significant debt or money woes",
        "A loved one is in trouble - ",
        "Romantic failure with a desired person",
        "Drug or behavioral addiction",
        "Their superior dislikes or resents them",
        "They have a persistent sickness",
        "They hate their job or life situation",
        "Someone dangerous is targeting them",
        "They're pursuing a disastrous purpose",
        "They have no problems worth mentioning"
    ];
    let result = "";
    let roll = Math.floor((Math.random() * problems.length));
    if (roll == 1) {
        result = problems[roll];
        while (roll == 1) {
            roll = Math.floor((Math.random() * problems.length));
        }
        result += problems[roll];
    } else {
        result = problems[roll];
    }
    return result;
}

function generateAge(): string {
    const ages = [
        "Unusually young or old for their role",
        "Young adult",
        "Mature prime",
        "Middle-aged or elderly"
    ];
    return ages[Math.floor(Math.random() * ages.length)];
}

function generateDesire(): string {
    const desires = [
        "They want a particular romantic partner",
        "They want money for them or a loved one",
        "They want a promotion in their job",
        "They want answers about a past trauma",
        "They want revenge on an enemy",
        "They want to help a beleagured friend",
        "They want an entirely different job",
        "They want protection from an enemy",
        "They want to leave their current life",
        "They want fame and glory",
        "They want power over those around them",
        "They have everything they want from life"
    ];
    return desires[Math.floor(Math.random() * desires.length)];
}

function generateTrait(): string {
    const traits = [
        "Ambition",
        "Avarice",
        "Bitterness",
        "Courage",
        "Cowardice",
        "Curiosity",
        "Deceitfulness",
        "Determination",
        "Devotion to a cause",
        "Filiality",
        "Hatred",
        "Honesty",
        "Hopefulness",
        "Love of a person",
        "Nihilism",
        "Paternalism",
        "Pessimism",
        "Protectiveness",
        "Resentment",
        "Shame"
    ];
    return traits[Math.floor(Math.random() * traits.length)];
}

function generateNPC(): Array {
    let background = generateBackground();
    let role = generateRole();
    let problem = generateProblem();
    let age = generateAge();
    let desire = generateDesire();
    let trait = generateTrait();
    return [background, role, problem, age, desire, trait];
}
