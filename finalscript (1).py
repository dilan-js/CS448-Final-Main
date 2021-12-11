import matplotlib.pyplot as plt
import csv
import random

set = "equal"

with open(set + '.csv', 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file, delimiter=',')

    ascending = 0
    sound = 0
    equal = 1

    if (set == "ans" or set == "as"):
        ascending = 1
    if (set == "as" or set == "ds"):
        sound = 1
    
    for x in range (6):
        scale = random.randrange(1, 9, 2) / 10
        if (ascending):
            a = random.randint(1, 8) * 10
            b = a*(1+scale)
        else:
            a = random.randint(5,10) * 10 #for descending
            b = a*(1-scale)

        if (equal):
            a = random.randint(1, 8) * 10
            b = a

        if (sound):
            csv_writer.writerow([a, b, scale, random.randint(1, 5), random.randint(1, 5)])
        else:
            csv_writer.writerow([a, b, scale])

        plt.bar(["A","B"],[a, b], color=['blue', 'red'])
        ax = plt.gca()
        ax.set_ylim(bottom=0, top=100)
        ax.spines['right'].set_visible(False)
        ax.spines['top'].set_visible(False)
        plt.tick_params(left=False,labelleft=False)
        plt.savefig(set + str(x) + ".png")
        plt.show()
        plt.clf()
        print("Done " + str(x))
    csv_file.close()