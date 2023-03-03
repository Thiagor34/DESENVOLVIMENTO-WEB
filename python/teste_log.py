import logging

logging.basicConfig(level=logging.DEBUG,
                    filename='log.log' ,
                    format='%(levelname)s : %(asctime)s : %(message)s')

nota = 10

if nota < 5:
    logging.critical('Reprovado')
elif nota >= 5:
    logging.info('Aprovado')