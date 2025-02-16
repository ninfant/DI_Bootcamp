from druid import Druid
from mage import Mage
from warrior import Warrior

if __name__ == '__main__':
    print("WELCOME TO THE RPG GAME!")

    # create characters
    print(f"\n****  DRUID  ****")
    druid = Druid("Eldorin")
    print(f"Druid {druid.name} has {druid.life} life points and {druid.attack} attack points.")
    druid.meditate()
    print(f"Druid {druid.name} has {druid.life} life points and {druid.attack} attack points.")
    druid.animal_help()
    druid.animal_help()
    print(f"Druid {druid.name} has {druid.life} life points and {druid.attack} attack points.")

    print(f"\n****  WARRIOR  ****")
    warrior = Warrior("Durnak")
    print(f"Warrior {warrior.name} has {warrior.life} life points and {warrior.attack} attack points.")
    warrior.train()
    warrior.train()
    print(f"Warrior {warrior.name} has {warrior.life} life points and {warrior.attack} attack points.")

    print(f"\n****  MAGE  ****")
    mage = Mage("Gandalf")
    print(f"Mage {mage.name} has {mage.life} life points and {mage.attack} attack points.")
    mage.summon()
    mage.summon()
    print(f"Mage {mage.name} has {mage.life} life points and {mage.attack} attack points.")

    #combat
    print(f"\n****  COMBAT  ****")
    print(f"Mage {mage.name} curse Druid {druid.name}.")
    mage.curse(druid) # druid attack -2 -> 16
    print(f"Druid {druid.name} has {druid.life} life points and {druid.attack} attack points.")

    print(f"Warrior {warrior.name} roar Mage {mage.name} twice.")
    warrior.roar(mage) # mage attack -3 -> 13
    warrior.roar(mage) # mage attack -3 -> 10
    print(f"Mage {mage.name} has {mage.life} life points and {mage.attack} attack points.")

    print(f"Mage {mage.name} cast spell on Druid {druid.name} twice.")
    mage.cast_spell(druid) # druid life - (20/10) -> 28
    mage.cast_spell(druid) # druid life - (20/10) -> 26
    print(f"Druid {druid.name} has {druid.life} life points and {druid.attack} attack points.")

    print(f"Warrior {warrior.name} has {warrior.life} life points and {warrior.attack} attack points.")
    print(f"Warrior {warrior.name} brawl Druid {druid.name}.")
    warrior.brawl(druid) # warrior 14 attack -> 2*14 = 28, druid 26 life -> 26+8 = 34
    # warrior life from 24 to 31
    print(f"Druid {druid.name} has {druid.life} life points and {druid.attack} attack points.")
    print(f"Warrior {warrior.name} has {warrior.life} life points and {warrior.attack} attack points.")

    # druid attack force (0.75*1)+(0.75*16) -> 12.75
    print(f"Druid {druid.name} fight Warrior {warrior.name} twice.")
    druid.fight(warrior) # warrior 31 life - 12.75 = 18.25
    druid.fight(warrior) # warrior 18.25 life - 12.75 = 5.5

    print(f"\n****  FINAL STATS  ****")
    print(f"Mage {mage.name} has {mage.life} life points and {mage.attack} attack points.")
    print(f"Druid {druid.name} has {druid.life} life points and {druid.attack} attack points.")
    print(f"Warrior {warrior.name} has {warrior.life} life points and {warrior.attack} attack points.")
