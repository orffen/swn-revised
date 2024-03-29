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
function generateTrustworthiness() {
    var trustworthinesses = [
        "They intend to totally screw the PCs",
        "They won't pay unless forced to do so",
        "They'll pay slowly or reluctantly",
        "They'll pay, but discount for mistakes",
        "They'll pay without quibbling",
        "They'll pay more than they promised"
    ];
    return trustworthinesses[Math.floor(Math.random() * trustworthinesses.length)];
}
function generateChallenge() {
    var challenges = [
        "Kill somebody who might deserve it",
        "Kidnap someone dangerous",
        "Steal a well-guarded object",
        "Arson or sabotage on a place",
        "Get proof of some misdeed",
        "Protect someone from an immediate threat",
        "Transport someone through danger",
        "Guard an object being transported"
    ];
    return challenges[Math.floor(Math.random() * challenges.length)];
}
function generateCountervail() {
    var countervails = [
        "A treacherous employer or subordinate",
        "An open and known enemy of the patron",
        "Official governmental meddling",
        "An unknown rival of the patron",
        "The macguffin itself opposes them",
        "Very short time frame allowed",
        "The job is spectacularly illegal",
        "A participant would profit by their failure",
        "The patron is badly wrong about a thing",
        "The locals are against the patron"
    ];
    return countervails[Math.floor(Math.random() * countervails.length)];
}
function generateEagerness() {
    var eagernesses = [
        "Cautious, but can be convinced to hire",
        "Willing to promise standard rates",
        "Eager, willing to offer a bonus",
        "Desperate, might offer what they can't pay"
    ];
    return eagernesses[Math.floor(Math.random() * eagernesses.length)];
}
function generateRewards() {
    var rewards = [
        "Government official favors owed",
        "Property in the area",
        "An item very valuable on another world",
        "Pretech mod components",
        "Useful pretech artifact",
        "Information the PCs need",
        "Membership in a powerful group",
        "Black market access",
        "Use of restricted facilities or shipyards",
        "Shares in a profitable business",
        "Maps to a hidden or guarded treasure",
        "Illegal but valuable weapons or gear"
    ];
    return rewards[Math.floor(Math.random() * rewards.length)];
}
function generateComplications() {
    var complications = [
        "An ambush is laid somewhere",
        "PC involvement is leaked to the enemy",
        "The patron gives faulty aid somehow",
        "Failing would be extremely unhealthy",
        "The job IDs them as allies of a local faction",
        "The macguffin is physically dangerous",
        "An important location is hard to get into",
        "Succeeding would be morally distasteful",
        "A supposed ally is very unhelpful or stupid",
        "The patron badly misunderstood the PCs",
        "The job changes suddenly partway through",
        "An unexpected troublemaker is involved",
        "Critical gear will fail partway through",
        "An unrelated accident complicates things",
        "Payment comes in a hard-to-handle form",
        "Someone is turning traitor on the patron",
        "A critical element has suddenly moved",
        "Payment is in avidly-pursued hot goods",
        "The true goal is a subsidiary part of the job",
        "No complications; it's just as it seems to be"
    ];
    return complications[Math.floor(Math.random() * complications.length)];
}
function generatePatron() {
    var trustworthiness = generateTrustworthiness();
    var challenge = generateChallenge();
    var countervail = generateCountervail();
    var eagerness = generateEagerness();
    var rewards = generateRewards();
    var complications = generateComplications();
    return [trustworthiness, challenge, countervail, eagerness, rewards, complications];
}
