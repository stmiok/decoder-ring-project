// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() test", () => {
    describe("encode a message", () => {
        it("should encode a message by turning each letter into numbers", () => {
        const message = "message";
        const actual = polybius(message);
        const expected = "23513434112251";
        
        expect(actual).to.equal(expected);
    });

    it("should translate letters 'i' and 'j' to 42", () => {
        const message = "jumanji";
        const actual = polybius(message);
        const expected = "42542311334242";

        expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
        const message = "random message";
        const actual = polybius(message);
        const expected = "241133414323 23513434112251";

        expect(actual).to.equal(expected);
    });
});

    describe("decoding a message", () => {
        it("should decode a message by chaning the numbers into a letter", () => {
            const message = "23513434112251";
            const actual = polybius(message, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });

        it("should change 42 to both letter 'i' and 'j'", () => {
            const message = "42542311334242";
            const actual = polybius(message, false);
            
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });

        it("should leave spaces as is", () => {
            const message = "241133414323 23513434112251";
            const actual = polybius(message, false);
            const expected = "random message";

            expect(actual).to.equal(expected);
        });

        it("should return false if the length of all the numbers is odd", () => {
            const message = "2345 235134341122514";
            const actual = polybius(message, false);

            expect(actual).to.be.false;
        });
    });

});
