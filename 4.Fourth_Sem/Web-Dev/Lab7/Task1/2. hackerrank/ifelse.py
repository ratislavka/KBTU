import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    if n%2 != 0:
        print("Weird")

    elif n > 1 & n < 6:
        print("Not Weird")
    elif n > 5 & n < 21:
        print("Weird")
    elif n > 20:
        print("Not Weird")