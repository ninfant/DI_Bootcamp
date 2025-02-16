
class Character:
    _name = None
    _life = 20
    _attack = 10

    def __init__(self, name):
        self._name = name

    def basic_attack(self, other_character):
        other_character.life -= self.attack

    @property
    def name(self):
        return self._name

    @property
    def life(self):
        return self._life

    @life.setter
    def life(self, value):
        self._life = value

    @property
    def attack(self):
        return self._attack

    @attack.setter
    def attack(self, value):
        self._attack = value



