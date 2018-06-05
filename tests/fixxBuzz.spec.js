describe("FizzBuzz", function () {
    describe("given a number not divisible by 3", function () {
        it("should return 1", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(1);
            //Assert
            let expected = 1;
            expect(actual).toBe(expected);
        });
        it("should return 2", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(2);
            //Assert
            let expected = 2;
            expect(actual).toBe(expected);
        });
    });
    describe("when given a number divisible by 3", function () {
        it("should return Fizz for 3", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(3);
            //Assert
            let expected = "Fizz";
            expect(actual).toBe(expected);
        });
        it("should return Fizz for 6 ", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(6);
            //Assert
            let expected = "Fizz";
            expect(actual).toBe(expected);
        });
        it("should return Fizz for 9 ", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(9);
            //Assert
            let expected = "Fizz";
            expect(actual).toBe(expected);
        });
    });
    describe("when given a number divisible by 5", function () {
        it("should return Buzz for 5", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(5);
            //Assert
            let expected = "Buzz";
            expect(actual).toBe(expected);
        });
        it("should return Buzz for 10 ", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(10);
            //Assert
            let expected = "Buzz";
            expect(actual).toBe(expected);
        });
    });
    describe("when given a number divisible by 3 and 5 ", function () {
        it("should return FizzBuzz for 15", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(15);
            //Assert
            let expected = "FizzBuzz";
            expect(actual).toBe(expected);
        });
        it("should return FizzBuzz for 30", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(30);
            //Assert
            let expected = "FizzBuzz";
            expect(actual).toBe(expected);
        });
    });
    describe("when given number 101", function () {
        it("should return message", function () {
            //Arrange
            let kata = new fizzBuzz();
            //Act
            let actual = kata.returnedData(101);
            //Assert
            let expected = "Please make sure your number is 100 or less than";
            expect(actual).toBe(expected);
        });
    });
});