let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};

console.log(this);

restaurant.seatParty(73);
console.log(restaurant.checkAvailability(1));
