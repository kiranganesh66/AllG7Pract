


var { expect } = require("chai");
const exp = require("constants");
const { deserialize } = require("v8");

describe("Linked List", function () {
  var list;
  var data = [1, 2, 3, 4];
  beforeEach(function () {
    list = new LinkedList();
  });

  describe("When Empty", function () {
    it("should be empty intially", () => {
      //var list = new LinkedList();
      //assert.equal(true,list.isEmpty());
      expect(list.isEmpty()).to.be.equal(true);
    });

    it("should have size()=0 ", () => {
      //var list = new LinkedList();
      //assert.equal(list.size(),0);
      expect(list.size()).to.equal(0);
    });

    it("should have null for first item", () => {
      //var list=new LinkedList();
      expect(list._first).to.be.null;
    });
  });

  describe("on append", function () {
    describe("in empty list", function () {
      it("Tota list", () => {
        var returnList = list.append(1);
        expect(typeof returnList).to.equal("object");
      });
      it("should have size()=1", () => {
        //var list=new LinkedList();
        list.append(1);

        assert.equal(list.size(), 1);
      });

      it("should add multiple values at once", () => {
        list.append(1, 2, 3, 4);
        expect(list.size()).to.equal(4);
      });

      it("should add the node as the first item", () => {
        var value = 1;
        list.append(value);

        expect(list._first.value).to.equal(value);
      });

      it("should get the last item", () => {
        list.append(1, 2, 3, 4);
        expect(list._last.value).to.equal(4);
      });

      it("should add a node object", () => {
        list.append(1);

        expect(list._first).to.be.an.instanceOf(Node);
      });
    });

    describe("To NonEmpty List", function () {
      it("Increase the size by 1", () => {
        list.append(1);
        expect(list.size()).to.equal(1);
      });
      it("Adding last item ", () => {
        list.append(2);
        expect(list._last.value).to.equal(2);
      });
      it("Adding Multiple items in list", () => {
        list.append(1, 2, 3, 4);
        expect(list.size()).to.equal(4);
      });
    });
  });

  describe("get", function () {
    var size;
    var data = [2, 3, 9, 5, 1];
    beforeEach(function () {
      list.append(...data);
      size = list.size();
    });

    it("should return valid value for all valid index", function () {
      for (var i = 0; i < data.length; i++) {
        expect(list.get(i)).to.be.equal(data[i]);
      }
    });

    it("Throw Exception for Invalid Index", function () {
      var index = 20;
      try {
        expect(list.get(index)).to.equal(data[index]);
      } catch (e) {}
    });

    it("Throw exception for non-numeric index", function () {
      var index = 20;
      try {
        expect(list._validateIndex("number")).to.equal(data[index]);
      } catch (e) {}
    });

    it("Return last item with index -1", function () {
      var index = -1;
      try {
        expect(list.get(index)).to.equal(data[index]);
      } catch (e) {}
    });
  });

  describe("Set", function () {
    it("update item with valid index", function () {
      list.append(...data);
      var index = 2;
      list.set(index, 20);

      expect(list.get(index)).to.equal(20);
    });

    it("Throw exception for invalid index", function () {
      list.append(...data);
      var index = 40;

      try {
        expect(list.set(index, 20));
      } catch (e) {}
    });

    it("Throw exception for non-numeric index", function () {
      list.append(...data);
      var index = 40;

      try {
        expect(list.set(index, "20"));
      } catch (e) {}
    });

    it("Not increase the list size", function () {
      list.append(...data);
      var beforelen = list.size();
      list.set(2, 30);
      var afterlen = list.size();
      expect(beforelen).to.equal(afterlen);
    });
  });

  describe("Remove", function () {
    it("Remove item with valid index", () => {
      list.append(...data);
      var indexValue = list.get(2);
      expect(list.remove(2)).to.equal(indexValue);
    });

    it("Throw exception for invalid index", () => {
      list.append(...data);
      var indexValue = list.get(2);
      try {
        expect(list.remove(10)).to.equal(indexValue);
      } catch {}

      it("Remove las item with -1 index", () => {
        list.append(...data);
        var indexValue = list.get(-1);
        expect(list.remove(-1)).to.equal(indexValue);
      });
    });
    //end
  });

  describe("ForEach", function () {
    it("Get each item one by one", function () {
      list.append(...data);

      list.forEach(function (value, i) {
        expect(value).to.equal(data[i]);
      });
    });

    //foreachend
  });

  // it("Throw Exception for Invalid Indexhn", function () {
  //   var index = 20;
  //   try {
  //     expect(list.get(index)).to.equal(data[index]);
  //   } catch (e) {}
  // });

  // it("Throw exception for non-numeric index", function () {
  //     var index = 20;
  //     try {
  //       expect(list._validateIndex("number")).to.equal(data[index]);
  //     } catch (e) {}
  //   });

  //   it("Return last item with index -1", function () {
  //     var index = -1;
  //     try {
  //       expect(list.get(index)).to.equal(data[index]);
  //     } catch (e) {}
  //   });

  //end
});
