import random
from MakeSeqV3 import MakeSeqV3
from SequenceOfLetterTB import SequenceOfLetterTB

def MakeComposedSeq(nback, firstsec, secondsec):
    total = firstsec + secondsec
    crit = False
    
    while not crit:
        index = MakeSeqV3(nback, firstsec) + MakeSeqV3(nback, secondsec)
        
        # Check the specific pattern
        crit = True  # assume it's valid unless proven otherwise
        for a in range(3):
            i = a + firstsec
            if index[i] == index[i + 1] or index[i] == index[i + 2] or index[i] == index[i + 3]:
                crit = False
                break

    index_letter = SequenceOfLetterTB(total) # gives a sequence of numbers of the same size as the sequence of numbers (lseq) so that letters are randomly either upper-case or lower-case
    
    letters  = ['A', 'E', 'I', 'O', 'U', 'Y', 'B', 'C', 'G', 'K', 'M', 'P']
    letters2 = ['a', 'e', 'i', 'o', 'u', 'y', 'b', 'c', 'g', 'k', 'm', 'p']

    l_letters = []
    for i in range(total):
        if index_letter[i] == 1:
            l_letters.append(letters[index[i] - 1])   # MATLAB is 1-based; Python is 0-based
        else:
            l_letters.append(letters2[index[i] - 1])
    
    return l_letters#, index

result = MakeComposedSeq(2, 31, 31)
print(result)

b = [6, 6, 9, 2, 1, 11, 1, 11, 1, 2, 11, 2, 6, 3, 1, 2, 11, 9, 9, 3, 9, 3, 1, 11, 1, 11]
print(len(b))