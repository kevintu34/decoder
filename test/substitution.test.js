// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substition()", () => {
    it("should be a function", () => {
        expect(typeof(substitution)).to.equal("function")
    })
    it("should return an ENCODED message when a simple string and alphabet is provided", () => {
        const actual = substitution("abcxyz", "xoyqmcgrukswaflnthdjpzibev", true)
        const expected = "xoybev"
        expect(actual).to.equal(expected)
    })
    it("should return an ENCODED message when an alphabet with special characters is provided", () => {
        const actual = substitution("abcxyz", "$wae&zrdxtfcygvuhbijnokmpl", true)
        const expected = "$wampl"
        expect(actual).to.equal(expected)
    })
    it("should return an ENCODED message when a string with a space is provided", () => {
        const actual = substitution("abc xyz", "xoyqmcgrukswaflnthdjpzibev", true)
        const expected = "xoy bev"
        expect(actual).to.equal(expected)
    })
    it("should return an ENCODED message when a string with a upper case letters is provided", () => {
        const actual = substitution("ABC XYZ", "xoyqmcgrukswaflnthdjpzibev", true)
        const expected = "xoy bev"
        expect(actual).to.equal(expected)
    })
    it("should return an DECODED message when a simple string and alphabet is provided", () => {
        const actual = substitution("xoybev", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "abcxyz"
        expect(actual).to.equal(expected)
    })
    it("should return an DECODED message when an alphabet with special characters is provided", () => {
        const actual = substitution("$wampl", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = "abcxyz"
        expect(actual).to.equal(expected)
    })
    it("should return an DECODED message when a string with a space is provided", () => {
        const actual = substitution("xoy bev", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "abc xyz"
        expect(actual).to.equal(expected)
    })
    it("should return an DECODED message when a string with a upper case letters is provided", () => {
        const actual = substitution("XOY BEV", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "abc xyz"
        expect(actual).to.equal(expected)
    })
    it("should return false if alphabet is not provided", () => {
        const actual = substitution("ABC XYZ")
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if alphabet is not 26 characters", () => {
        const actual = substitution("ABC XYZ", "xoy")
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if alphabet contains any non-unique(repeated) characters", () => {
        const actual = substitution("abcxyz", "xzyzmzgzuzszazlztzdzpzizez")
        const expected = false
        expect(actual).to.equal(expected)
    })
})