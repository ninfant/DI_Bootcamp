from character import Character


class Warrior(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"Your warrior {name} stands ready, steel and fury will lead the way!")

    def brawl(self, other_character):
        other_character.life -= (2*self.attack)
        self.life += (0.5*self.attack)

    def train(self):
        self.attack += 2
        self.life += 2

    def roar(self, other_character):
        other_character.attack -= 3
