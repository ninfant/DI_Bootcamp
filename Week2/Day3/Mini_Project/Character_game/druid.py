from character import Character


class Druid(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"Your druid {name} is ready for the fight, nature’s power awaits!")

    def meditate(self):
        self.life += 10
        self.attack -= 2

    def animal_help(self):
        self.attack += 5

    def fight(self, other_character):
        other_character.life -= (0.75*self.life+0.75*self.attack)
