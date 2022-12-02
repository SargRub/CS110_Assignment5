// Exercise 1
function matrixProduct(mat1, mat2)
{
    let result = [];
    for(let i = 0; i < mat1.length; i++)
    {
        result[i] = [];
        for(let j = 0; j < mat2[0].length; j++)
        {
            result[i][j] = 0;
            for(let t = 0; t < mat1[i].length; t++)
            {
                result[i][j] += mat1[i][t] * mat2[t][j];
            }
        }
    }
    return result;
}


// Exercise 2
function sumOfMatrices(mat1, mat2)
{
    const result = [];
    for(let i = 0; i < mat1.length; i++)
    {
        result[i] = []
        for(let j = 0; j < mat1[i].length; j++)
        {
            result[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return result;
}



// Exercise 3
function sumOfEachRow(mat)
{
    let result = [];
    for(let i = 0; i < mat.length; i++)
    {
        result[i] = sumOfArray(mat[i])
    }
    return result;
}

function sumOfArray(arr)
{
    let sum_of_elements = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum_of_elements += arr[i]
    }
    return sum_of_elements;
}



// Exercise 4

function countWords(word)
{
    let i = 0;
    let word_count = 0;
    while(i < word.length)
    {
        while(i < word.length && word[i] == ' ')
        {
            i++;
        }
        if(i < word.length)
        {
            word_count++;
        }
        else
        {
            return word_count;
        }
        while(i < word.length && word[i] != ' ')
        {
            i++;
        }
        if (!(i < word.length))
        {
            return word_count;
        }
    }
}

// Exercise 5
function trim(word)
{
    result = "";
    start = find_first_not_space_index(word);
    end = find_last_not_space_index(word);
    for(let i = start; i <= end; i++)
    {
        result += word[i];
    }
    return result;
}

function find_first_not_space_index(word)
{
    let start = 0;
    let i = start;
    while(i < word.length && word[i] == " ")
    {
        i++;
    }
    if (i < word.length)
    {
        start = i;
    }
    return start;
}

function find_last_not_space_index(word)
{
    let end = word.length - 1;
    let j = end;
    while(j >= 0 && word[j] == " ")
    {
        j--;
    }
    if (j >= 0)
    {
        end = j;
    }
    return end;
}


module.exports = {
    matrixProduct: matrixProduct,
    sumOfMatrices: sumOfMatrices,
    sumOfEachRow: sumOfEachRow,
    countWords: countWords,
    trim: trim
}