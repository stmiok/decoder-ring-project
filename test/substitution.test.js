// Write your tests here!
const {expect} = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() test", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            const message = "message";
            const actual = substitution(message);
            expect(actual).to.be.false;
        });

        it("should return false if the substitution alphabet isn't 26 characters long", () => {
            const message = "message";
            const alphabet = "short";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });

        it("should return false if substitution alphabet doesn't inclue unique characters", () => {
            const message = "message";
            const alphabet = "abcabcabcabcabcabcabcabcab";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    });
    
    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const message = "message";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "jtaaqut";
            expect(actual).to.equal(expected);
        });

        it("should work with any kind of unique character" , () => {
            const message = "secrect message";
            const alphabet = "p;.loik,mjuyhnbgtrfvcdewsx";
            const actual = substitution(message, alphabet);
            const expected = "fo.ro.v hoffpko";
            expect(actual).to.equal(expected);
        });

        it("should keep spaces", () => {
            const message = "secrect message";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "atestez jtaaqut";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding messages", () => {
        it("should decode a message using the given substitution alphabet", () => {
            const message = "atestez jtaaqut";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const actual = substitution(message, alphabet, false);
            const expected = "secrect message";
            expect(actual).to.equal(expected);
        });

        it("should work with any kind of unique character", () => {
            const message = "fo.ro.v hoffpko";
            const alphabet = "p;.loik,mjuyhnbgtrfvcdewsx";
            const actual = substitution(message, alphabet, false);
            const expected = "secrect message";
            expect(actual).to.equal(expected);
        });

        it("should keep spaces", () => {
            const message = "fo.ro.v hoffpko";
            const alphabet = "p;.loik,mjuyhnbgtrfvcdewsx";
            const actual = substitution(message, alphabet, false);
            const expected = "secrect message";
            expect(actual).to.equal(expected);
        });
    });
});

/*
p ; . l o i k , m j u y h n b g t r f v c d e w s x
a b c d e f g h i j k l m n o p q r s t u v w x y z

fo.ro.v hoffpko

atestez jtaaqut
*/