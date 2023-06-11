// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() test", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "mango tires";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "mango tires";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "mango tires";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "message";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "phvvdjh";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "secret message.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "vhfuhw phvvdjh.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "A Message";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d phvvdjh";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "mango tires";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "pdqjr wluhv";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "mango tires";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "jxkdl qfobp";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "phvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "D pHvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "pdqjr wluhv";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "mango tires";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "jxkdl qfobp";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "mango tires";

      expect(actual).to.equal(expected);
    });
  });
});
