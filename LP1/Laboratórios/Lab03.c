#include <stdio.h>
#include <string.h>
#define C 100//Tamanho da palavra
#define XXX 31 //Tamanho do significado da palavra
#define LX 61
#define II 2


void C_dicionario(char DIC[C][II][XXX],int q_palavras_dic){

    puts("---PREENCHER DICIONARIO---");
    for(int i=0;i<q_palavras_dic;i++){
        printf("%d- Palavra: ",i+1);
        setbuf(stdin,NULL);
        fgets(DIC[i][0],XXX,stdin);
        strtok(DIC[i][0], "\n");


        printf("Significado da Palavra %d: ",i+1);
        setbuf(stdin,NULL);
        fgets(DIC[i][1],XXX,stdin);
        strtok(DIC[i][1], "\n");
    }
}

void mensagemFinal(char MSM_final[C][LX],int q_mensagens_finais){

    for(int i=0;i<q_mensagens_finais;i++){
        printf("Digite a frase criptografada: ");
        setbuf(stdin,NULL);
        gets(MSM_final[i]);


}}

limpar(char aux[XXX][LX],int x, int contar){
        int i,j;
        for(i=0;i<x;i++){
               strcpy(aux[i],"\0");
            }

            for(i=0;i<x;i++){
                for(j=0;j<contar*10;j++){
                    aux[i][j]='\0';
                }

                }


}





descriptografar(char DIC[C][II][XXX],char MSM_final[C][LX],int q_palavras_dic, int q_mensagens_finais,int rodada){
    char aux[XXX][LX];
    int i,j=0,indice=0,contar=1,x=0;

    for(i=0;MSM_final[rodada][i] != '\0';i++){
            x++;

        if(MSM_final[rodada][i] != ' '){
            aux[j][indice] = MSM_final[rodada][i];
            indice++;
        }else{
            j++;
            aux[j][indice+1]='\0';
            indice = 0;
            contar++;
        }
    }//fim do for i


        for(i=0;i<q_palavras_dic;i++){
            for(j=0;j<contar;j++){
                if(strcmp(DIC[i][0],aux[j]) == 0){
                    strcpy(aux[j],DIC[i][1]);
                }
            }

        }//fim do for i 2
        for(i=0;i<contar;i++){
            printf("%s ",aux[i]);
        }
        puts("\n");
        limpar(aux,x,contar);



      }//fim func


main(){

    int i,instancias = 0, q_mensagens_finais=0,q_palavras_dic = 0;
    char DIC[C][II][XXX],MSM_final[C][LX];

    printf("Digite a quantidade de instancias: ");scanf("%d",&instancias);

    if(instancias > 0){
        while(instancias){
            printf("Digite a quantidade de palavras do dicionario: ");scanf("%d",&q_palavras_dic);
            if(q_palavras_dic > 0 && q_palavras_dic <= 100){
                C_dicionario(DIC, q_palavras_dic);//preencher o dicionario

                printf("Digite a quantidade de mensagens criptografadas: ");scanf("%d",&q_mensagens_finais);
                mensagemFinal(MSM_final,q_mensagens_finais);//pedir as frases criptografadas


                for(i=0;i<q_mensagens_finais;i++){
                descriptografar(DIC,MSM_final,q_palavras_dic,q_mensagens_finais,i);
                }


            }
        --instancias;
        }
    }else
        return ;
}

