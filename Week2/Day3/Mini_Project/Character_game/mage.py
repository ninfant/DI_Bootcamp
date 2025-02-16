from character import Character


class Mage(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"Your mage {name} is ready, unleash the arcane and bend reality to your will!")

    def curse(self, other_character):
        other_character.attack -= 2


    def summon(self):
        self.attack += 3

    def cast_spell(self, other_character):
        other_character.life -= (self.attack/self.life)
